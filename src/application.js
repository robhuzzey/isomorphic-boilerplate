import React from 'react'
import { Route, Link } from 'react-router-dom'
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import { matchPath } from 'react-router'

class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
      </div>
    )
  }
};

export default Routes;
