import React from 'react';
import { render } from 'react-dom';
import ReactGithubCalendar from '../../lib/react-github-calendar';

const element = document.createElement('div');
document.body.appendChild(element);
render(
  <div>
    hello world
    <ReactGithubCalendar name="axetroy" />
  </div>,
  element
);
