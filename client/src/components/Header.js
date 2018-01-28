import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SideNav, SideNavItem } from "react-materialize";
import Payments from "./Payments";
import logo from "../styles/assets/jmlogosmallwhite.png";

class Header extends Component {
  renderSideNav() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="3">
            <h4 className="sidenav-title">JuniperMail</h4>
          </li>,
          <SideNavItem key="1" href="/auth/google">
            Sign Up
          </SideNavItem>,
          <SideNavItem key="2" href="/auth/google">
            Login With Google
          </SideNavItem>
        ];
      default:
        return [
          this.props.auth.name || this.props.auth.email ? (
            <SideNavItem
              userView
              user={{
                name: `${this.props.auth.name || ""}`,
                email: `${this.props.auth.email || ""}`
              }}
              key="4"
            />
          ) : (
            <li key="4">
              <h4 className="sidenav-title">JuniperMail</h4>
            </li>
          ),
          <SideNavItem key="1" className="side-nav-btn">
            <Payments />
          </SideNavItem>,
          <SideNavItem key="2">Credits: {this.props.auth.credits}</SideNavItem>,
          <SideNavItem key="6" href="/myaccount">
            Account
          </SideNavItem>,
          <SideNavItem key="5" href="/surveys">
            Surveys
          </SideNavItem>,
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
          <li key="2" style={{ margin: "0 0 0 30px" }}>
            <a
              className="dropdown-button"
              data-beloworigin="true"
              data-activates="dropdown1"
            >
              Menu<i className="material-icons right">arrow_drop_down</i>
            </a>

            <ul id="dropdown1" className="dropdown-content">
              <li className="dropdown-text">
                Credits: {this.props.auth.credits}
              </li>
              <li>
                <a href="/myaccount">Account</a>
              </li>
              <li>
                <a href="/surveys">Surveys</a>
              </li>
              <li className="divider" />
              <li key="2">
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
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
            <img src={logo} alt="" />
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
          <SideNav
            trigger={
              <a data-activates="mobile-demo" className="right button-collapse">
                <i className="material-icons">menu</i>
              </a>
            }
            options={{ closeOnClick: true, edge: "right" }}
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
