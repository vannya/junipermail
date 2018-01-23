/*  
  Basic Template for hooking up the survey process
  Will add nicer survey in the future 
*/
const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/sureveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
