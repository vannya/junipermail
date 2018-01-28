import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import SurveySelect from "./SurveySelect";
import validateEmails from "../../utils/validateEmails";
import validateSingleEmail from "../../utils/validateSingleEmail";
import formFields from "./formFields";
import surveyTemplateList from "./surveyTemplateList";

class SurveyForm extends Component {
  state = {};

  renderFields() {
    return _.map(formFields, ({ label, name, placeholder }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          text="text"
          name={name}
          label={label}
          placeholder={placeholder}
        />
      );
    });
  }

  renderSelect() {
    const selectFields = [{ label: "Survey Choice", name: "surveyChoice" }];
    return _.map(selectFields, ({ label, name }) => {
      return (
        <Field key={name} component={SurveySelect} name={name} label={label} />
      );
    });
  }

  render() {
    return (
      <div className="survey-form">
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          {this.renderSelect()}
          <p>Reply email: {this.props.auth.replyTo}</p>
          <p>To change the reply email, <Link to="/myaccount">click here.</Link></p>
          <div>
            <Link to="/surveys" className="cancelBtn btn-flat left white-text">
              Cancel
            </Link>
            <button type="submit" className="btn btn-flat right white-text">
              Next
              <i className="material-icons right">done</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.fromfield = validateSingleEmail(values.fromfield || "");
  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  _.each(surveyTemplateList, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false // persists form data
})(SurveyForm);
