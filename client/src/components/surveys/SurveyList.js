import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-materialize";
import { fetchSurveys, deleteSurvey } from "../../actions";

class SurveyList extends Component {
  componentWillMount() {
    this.props.fetchSurveys();
  }

  handleDelete(survey) {
    console.log("delete");
    this.props.deleteSurvey(survey, survey._id);
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      if (!survey.delete) {
        return (
          <div className="card card-opt" key={survey._id}>
            <Modal
              header="Are you sure you would like to delete this survey?"
              trigger={
                <Button className="right">
                  <i className="material-icons">close</i>
                </Button>
              }
              actions={[
                <Button className="cancelBtn modal-close" style={{ marginRight: "10px" }}>
                  Cancel
                </Button>,
                <Button className="modal-close" onClick={() => this.handleDelete(survey)}>Agree</Button>
              ]}
            >
              <p>
                Once this is deleted, there is no way to retrieve this data.
              </p>
            </Modal>
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
      } else {
        return "";
      }
    });
  }

  render() {
    if (this.props.surveys && this.props.surveys.length) {
      let activeSurveys = this.props.surveys.filter(survey => !survey.delete);
      if (activeSurveys.length) {
        return <div>{this.renderSurveys()}</div>;
      } else {
        return (
          <div style={{ textAlign: "center", fontSize: "1.5em" }}>
            No Surveys Yet
          </div>
        );
      }
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

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
