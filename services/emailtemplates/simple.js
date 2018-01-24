/*  
  Simple Text Survey
  // Need to create...currently same as main.
*/
const keys = require("../../config/keys");

module.exports = survey => {
  return `

  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/icon?family=Montserrat" rel="stylesheet">
  <title>${survey.title}</title>
</head>

<body>
  <div>
    <h3>We'd like your input!</h3>
    <p>${survey.body}</p>
    <div>
      <p>Please choose one:</p>
      <p>
        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a> or <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
      </p>
    </div>
  </div>
  <p>Sent on behalf of <a href="mailto:${survey.useremail}" >${survey.name}</a> by <a href="https://junipermail.herokuapp.com/">JuniperMail</a></p>
  <div><a href="mailto:${survey.useremail}?Subject=Unsubscribe&20Me">Click Here to Unsubscribe</a></div>
  </div>
</body>
</html>
`;
};
