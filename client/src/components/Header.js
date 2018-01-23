import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SideNav, SideNavItem } from "react-materialize";
import Payments from "./Payments";

class Header extends Component {
  renderSideNav() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <SideNavItem key="1" href="/auth/google">
            Sign Up
          </SideNavItem>,
          <SideNavItem key="2" href="/auth/google">
            Login With Google
          </SideNavItem>
        ];
      default:
        return [
          <SideNavItem key="1">
            <Payments />
          </SideNavItem>,
          <SideNavItem key="2">Credits: {this.props.auth.credits}</SideNavItem>,
          <SideNavItem key="3" href="/api/logout">
            Logout
          </SideNavItem>
        ];
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <a href="/auth/google">Sign Up</a>
          </li>,
          <li key="2">
            <a href="/auth/google">Login With Google</a>
          </li>
        ];
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo center"
          >
            JuniperMail
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
          <SideNav
            trigger={
              <a
                href="#"
                data-activates="mobile-demo"
                className="button-collapse"
              >
                <i className="material-icons">menu</i>
              </a>
            }
            options={{ closeOnClick: true }}
          >
            {this.renderSideNav()}
          </SideNav>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
