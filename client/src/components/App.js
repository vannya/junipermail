import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import ThankYou from "./ThankYou";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <BrowserRouter>
          <div style={{ height: "100%", width: "100%" }}>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/surveys/:surveyId/:choice" component={ThankYou}/>
            <Route path="/thankyou" component={ThankYou}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
