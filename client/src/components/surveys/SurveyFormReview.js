import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import surveyTemplateList from "./surveyTemplateList";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history, auth }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name} className="survey-review-item">
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div className="container page-view">
      <h5 className="page-title">Please confirm your entries</h5>
      <div className="survey-review-info">
        {reviewFields}
        <div className="survey-review-item">
          <label>Survey Template</label>
          <div>
            {surveyTemplateList.map(key => {
              return key.value === formValues.surveyChoice ? key.label : "";
            })}
          </div>
        </div>
        <div className="survey-review-item">
          <label>Reply Email</label>
          <div>{auth.replyTo}</div>
        </div>

        <button className="cancelBtn btn-flat white-text" onClick={onCancel}>
          Back
        </button>
        <button
          className="btn btn-flat right white-text"
          onClick={() => submitSurvey(formValues, history, auth.replyTo)}
        >
          Send Survey <i className="material-icons right">email</i>
        </button>
      </div>
      <p className="disclaimer">
        Please note: Your survey will be sent and credits deducted once you
        click "Send Survey".
      </p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
