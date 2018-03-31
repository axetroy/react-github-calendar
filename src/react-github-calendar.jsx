import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';
import PropTypes from 'prop-types';

import './style.css';

export default class ReactGithubCalendar extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  componentDidMount() {
    GitHubCalendar(this.refs.container, this.props.name);
  }
  render() {
    return (
      <div
        className={
          'calendar' + (this.props.className ? ' ' + this.props.className : '')
        }
        {...this.props}
        ref="container"
      />
    );
  }
}
