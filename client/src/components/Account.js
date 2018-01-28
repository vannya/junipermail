import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Account extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchUser();
  }

  renderAccountPage() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <div className="container page-view">
            <h3 className="page-title">Account</h3>

            <form
              onSubmit={e => this.handleSubmit(e)}
            >
              <input
                type="text"
                name="userName"
                value={this.props.auth.name}
                placeholder="Company or User Name"
                onChange={(e) => this.handleChange(e)}
              />
              <button type="submit">Update Account</button>
            </form>
          </div>
        );
    }
  }

  handleChange(e){
    console.log(e.target.value);
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  render() {
    return <div>{this.renderAccountPage()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Account);
