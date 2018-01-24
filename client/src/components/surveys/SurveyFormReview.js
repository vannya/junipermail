import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
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
      <div className="survey-review-info">{reviewFields}
  
      <button className="cancelBtn btn-flat white-text" onClick={onCancel}>
        Back
      </button>
      <button
        className="btn btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey <i className="material-icons right">email</i>
      </button>
      </div>
      <p className="disclaimer">Please note: Your survey will be sent and credits deducted once you click "Send Survey".</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values 
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
