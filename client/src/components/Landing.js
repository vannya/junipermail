import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-image">
        <div className="overlay">
          <div className="landing-title">SIMPLY SURVEYS</div>
          <div className="landing-subtitle">
            COLLECT FEEDBACK AND GET THE INSIGHTS YOU NEED
          </div>
          <a href="/auth/google">
            <button className="btn btn-flat white-text btn-large">
              SIGN UP FREE
            </button>
          </a>
        </div>
        <div className="icon-section">
          <div className="icon-wrapper">
            <i className="material-icons medium">developer_board</i>
            <div className="icon-label">Quick Setup</div>
            <div className="blurb">
              Get your survey sent out in minutes with our preformatted surveys.
            </div>
          </div>
          <div className="icon-wrapper">
            <i className="material-icons medium">content_copy</i>
            <div className="icon-label">Easy To Use</div>
            <div className="blurb">
              Pick your survey, fill out a short form, add your recipients and
              send!
            </div>
          </div>
          <div className="icon-wrapper">
            <i className="material-icons medium">code</i>
            <div className="icon-label">Clean Design</div>
            <div className="icon-blurb">
              Surveys to save your customers time and maximize responses.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
