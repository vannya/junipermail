import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentWillMount() {
    this.props.fetchSurveys();
  }

  deleteSurvey(survey) {
    console.log("deleted");
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card card-opt" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <div>
              <span>{survey.body}</span>
              <span className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="card-action">
            <div className="survey-options">Yes: {survey.yes}</div>
            <div className="survey-options">No: {survey.no}</div>
            <div className="survey-options">
              Total: {survey.yes + survey.no}
            </div>
            <span className="survey-response">
              Last Response:{" "}
              {new Date(survey.lastResponded).toLocaleDateString()}
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.surveys && this.props.surveys.length) {
      return <div>{this.renderSurveys()}</div>;
    } else {
      return (
        <div style={{ textAlign: "center", fontSize: "1.5em" }}>
          No Surveys Yet
        </div>
      );
    }
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
