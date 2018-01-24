/*  
  Modern HTML Survey
  // Need to create...currently same as main.
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
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  <title>${survey.title}</title>
</head>

<body style="font-family: 'Open Sans', sans-serif; margin: 0 auto; max-width: 800px; ">
    <div style="min-height: 800px; background: url(https://source.unsplash.com/IZrEEtu3fkk/1000x1000) no-repeat center top; text-align: center; max-width: 800px; border-bottom: 1px solid #FFF; padding: 1em 2em;">
      <h1 style="margin-top: 150px;">We'd like your input!</h1>
      <p style="margin: 0 auto; margin-bottom: 50px; max-width: 300px; font-size: 1.2em;">${survey.body}</p>
      <div style="margin: 0 auto; padding: 1em; max-width: 200px;">
        <div style="margin: 0 auto;">
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes"><button style="cursor: pointer; background-color: unset; border: 2px solid #FFF; border-radius: 5px; margin-bottom: 1em; padding: 0.5em 0; width: 200px; font-weight: 700; font-size: 1.5em; color: white; text-decoration: none;" >Yes</button></a>
        </div>
        <div style="margin: 0 auto;">
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no"><button style="cursor: pointer; background-color: unset; border: 2px solid #FFF; border-radius: 5px; margin-bottom: 1em; padding: 0.5em 0; width: 200px; font-weight: 700; font-size: 1.5em; color: white; text-decoration: none;" >No</button></a>
        </div>
      </div>
    </div>
    <div style="background-color: rgba(0, 0, 0, 0.8); color: white; text-align: center; padding: 0.5em 0;">Sent on behalf of <a href="mailto:${survey.useremail}" style="color: #FC0; text-decoration: none;">${survey.name}</a> by <a href="https://junipermail.herokuapp.com/" style="color: #FC0; text-decoration: none;">JuniperMail</a></div>
    <div style="background-color: rgba(0, 0, 0, 0.8); color: white; text-align: center; padding: 0.5em 0;"><a style="color: #FC0; text-decoration: none;" href="mailto:${survey.useremail}?Subject=Unsubscribe&20Me">Unsubscribe</a></div>
    </div>
  </body> 
  </html>
</html>
`;
};
