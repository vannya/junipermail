import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import {Redirect} from 'react-router-dom';
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() =>
            this.setState(this.setState({ showFormReview: false }))
          }
        />
      );
    }
    return (
      <div className="container page-view">
        <h3 className="page-title">Create Survey</h3>
        <SurveyForm
          onSurveySubmit={() => this.setState({ showFormReview: true })}
        />
      </div>
    );
  }

  authCheck() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Redirect to="/" />;
      default:
        return this.renderContent();
    }
  }

  render() {
    return <div>{this.authCheck()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(
  reduxForm({ form: "surveyForm" })(SurveyNew)
);
