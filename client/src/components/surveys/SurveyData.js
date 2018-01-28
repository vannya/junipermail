import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import SurveyList from "./SurveyList";

class SurveyData extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Redirect to="/" />;
      default:
        return (
          <div className="container page-view">
            <h3 className="page-title">Surveys</h3>
            <SurveyList />
            <div className="fixed-action-btn">
              <Link to="/surveys/new" className="btn-floating btn-large addBtn">
                <i className="material-icons">add</i>
              </Link>
            </div>
          </div>
        );
    }
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(SurveyData);
