import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import queryString from 'query-string'

const Home = () => <p>Home</p>
const About = () => <p>About</p>
const Hello = props => {
  return (
    <p>
      Hello, {props.match.params.name}! with query{' : '}
      {queryString.parse(props.location.search).name}
    </p>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/hello/:name" component={Hello} />
        </Switch>

        <NavLink exact to="/" activeClassName="is-active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="is-active">
          About
        </NavLink>
        <NavLink to="/hello" activeClassName="is-active">
          Hello
        </NavLink>
      </div>
    )
  }
}

export default App
