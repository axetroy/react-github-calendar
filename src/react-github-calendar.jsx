import React, { Component, PropTypes } from 'react';
import GitHubCalendar from 'github-calendar';

import './style.css';

export default class ReactGithubCalendar extends Component {
  PropTypes = {
    name: PropTypes.string
  };
  render() {
    return (
      <div
        className={
          'calendar' + (this.props.className ? ' ' + this.props.className : '')
        }
        {...this.props}
        ref={dom => {
          GitHubCalendar(dom, this.props.name);
        }}
      />
    );
  }
}
