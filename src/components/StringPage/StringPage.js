import React, { Component } from 'react';
import './StringPage.css';
// import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import SideNavbar from "../SideNavbar/SideNavbar";
// import sub-pages
import StrOverview from './sub-pages/StrOverview';
import StrSubstr from './sub-pages/StrSubstr';
import StrSplit from './sub-pages/StrSplit';

// array of sidebar links to be passed as a prop to SideNavbar component
// includes url path, name of link, and component to be rendered
const routes = [
  {
    path: "/strings/overview",
    name: "Strings Overview",
    exact: true,
    comp: StrOverview
  },
  {
    path: "/strings/substr",
    name: "substr()",
    exact: true,
    comp: StrSubstr
  },
  {
    path: "/strings/split",
    name: "split()",
    exact: true,
    comp: StrSplit
  }
];

class StringPage extends Component {
  render() {
    return (
      <div className='page-container'>
        <SideNavbar routes={routes} />

        <div className='subpage-container'>

            {routes.map((route, idx) => (
              <Route
                key={idx}
                exact={route.exact}
                path={route.path}
                component={route.comp}
              />
            ))}

        </div>
      </div>
    );
  }
}

export default StringPage;