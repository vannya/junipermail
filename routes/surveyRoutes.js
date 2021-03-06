const _ = require("lodash");
const Path = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveylist = require("../services/emailtemplates");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false
    });

    res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    const surveyId = req.params.surveyId;
    const choice = req.params.choice; 
    res.redirect(`/surveys/${surveyId}/${choice}`);
  });

  //If testing in the dev environment, be sure to update
  //Sendgrid with an updated ngrok link. Free service,
  //but new site with each server load.
  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    _.chain(req.body)
      .map(({ url, email }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return {
            email: email,
            surveyId: match.surveyId,
            choice: match.choice
          };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();
    res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients, fromfield, surveyChoice } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      fromfield,
      surveyChoice,
      recipients: recipients.split(",").map(email => {
        return { email: email.trim() };
      }),
      _user: req.user.id,
      name: req.user.name,
      useremail: req.user.email,
      dateSent: Date.now()
    });
    
    const surveyToAccess = surveylist[surveyChoice];
 
    const mailer = new Mailer(survey, surveyToAccess(survey));

    try {
      await mailer.send();
      await survey.save(); 
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.put("/api/surveys/delete/:surveyId", requireLogin, (req, res) => {
    Survey.findById(req.params.surveyId, (err, survey) => {
      if(err){
        res.status(500).send(err);
      } else {
        survey.delete = true;

        survey.save((err, user) => {
          if(err) {
            res.status(500).send(err);
          }
          res.status(200).send(survey);
        });
      }
    })
  });
};
