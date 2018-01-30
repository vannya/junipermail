import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import SurveyData from "./surveys/SurveyData";
import SurveyNew from "./surveys/SurveyNew";
import ThankYou from "./ThankYou";
import Account from "./Account";
import Footer from "./Footer";

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
            <Route exact path="/surveys" component={SurveyData} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route exact path="/surveys/:surveyId/:choice" component={ThankYou} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/myaccount" component={Account} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
