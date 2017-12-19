import React from 'react';
import { render } from 'react-dom';
import ReactGithubCalendar from '../../lib/react-github-calendar';

const element = document.createElement('div');
document.body.appendChild(element);
render(
  <div>
    <ReactGithubCalendar name="axetroy" />
  </div>,
  element
);
