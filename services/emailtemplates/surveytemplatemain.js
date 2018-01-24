/*  
  Basic Template for hooking up the survey process
  Will add nicer survey in the future 
*/
const keys = require("../../config/keys");

module.exports = survey => {
  return `

  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/icon?family=Montserrat" rel="stylesheet">
    <title>${survey.title}</title>
  </head>
  
  <body style="font-family: 'Montserrat', sans-serif; margin: 0 auto; max-width: 600px;">
    <div style="text-align: center; max-width: 600px; border: 1px solid #9900cc; padding: 1em 2em;">
      <h3>We'd like your input!</h3>
      <p>${survey.body}</p>
      <div style="margin: 0 auto; padding: 1em; max-width: 200px">
        <div style="background-color: #00cc99; margin: 1em 0.5em; padding: 0.5em 1em;">
          <a style="font-weight: 700; font-size: 1.5em; color: white; text-decoration: none;" href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
        </div>
        <div style="background-color: #00cc99; margin: 1em 0.5em; padding: 0.5em 1em;">
          <a style="font-weight: 700; font-size: 1.5em; color: white; text-decoration: none;" href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
        </div>
      </div>
    </div>
    <div style="background-color: #9900cc; color: white; text-align: center; padding: 0.5em 0;">Sent on behalf of <a href="mailto:${survey.useremail}" style="color: #00cc99; text-decoration: none;">${survey.name}</a> by <a href="https://junipermail.herokuapp.com/" style="color: #00cc99; text-decoration: none;">JuniperMail</a></div>
    <div style="background-color: #9900cc; color: white; text-align: center; padding: 0.5em 0;"><a style="color: #00cc99; text-decoration: none;" href="mailto:${survey.useremail}?Subject=Unsubscribe&20Me">Unsubscribe</a></div>
    </div>
  </body>
  </html>
`;
};
