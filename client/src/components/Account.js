import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Account extends Component {
  state = {
    user: this.props.auth
  };

  async componentDidMount() {
    await this.props.fetchUser();
    this.setState({ user: this.props.auth});
  }

  renderAccountPage() {
    switch (this.props.auth && this.state.user) {
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
              <label>Full Name: </label>
              <input
                type="text"
                name="name"
                value={this.state.user.name}
                placeholder="Company or User Name"
                required
                onChange={(e) => this.handleChange(e)}
              />
              <label>Email: </label>
              <input
                type="text"
                name="email"
                value={this.state.user.email}
                placeholder="Email"
                required
                onChange={(e) => this.handleChange(e)}
              />
              <label>Reply to Email: </label>
              <input
                type="text"
                name="replyTo"
                value={this.state.user.replyTo}
                placeholder="Reply to Email"
                onChange={(e) => this.handleChange(e)}
              />
              <button type="submit">Update Account</button>
            </form>
          </div>
        );
    }
  }

  handleChange(e){
    const user = this.state.user;
    const updatedUser = {
      ...user,
      [e.target.name]: e.target.value 
    };
    this.setState({
      user: updatedUser
    });
    this.props.updateUser(updatedUser, updatedUser._id);
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user;
    const updatedUser = {
      ...user,
      [e.target.name]: e.target.value
    };
    this.setState({
      user: updatedUser
    });
    this.props.updateUser(updatedUser, updatedUser._id);
  }

  render() {
    return <div>{this.renderAccountPage()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Account);
