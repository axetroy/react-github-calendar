# react-github-calendar

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/react-github-calendar.svg)](https://greenkeeper.io/)

[github-calendar](https://github.com/IonicaBizau/github-calendar) wrapper component for react

## Install

```bash
yarn add @axetroy/react-github-calendar
```

## Usage

```jsx harmony
import React, { Component } from 'react';
import ReactGithubCalendar from '@axetroy/react-github-calendar';

class App extends Component {
  render() {
    return (
      <div>
        hello world
        <ReactGithubCalendar name="axetroy" />
      </div>
    );
  }
}
```

## Props

- name: string

> Github name
    
## Run the Demo

```bash
git clone https://github.com/axetroy/react-github-calendar.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/react-github-calendar/blob/master/LICENSE)