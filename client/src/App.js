import React, { createContext, useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Error from './components/Error'
import Logout from './components/Logout'

import {initialState, reducer} from './reducer/UseReducer'

const Routing = () => {
  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/signup'>
        <Signup />
      </Route>

      <Route path='/logout'>
        <Logout />
      </Route>

      <Route>
        <Error />
      </Route>

    </Switch>
  )
}

// 1. ContextAPI
export const userContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        {/* 
      1. Here the dispatch will call the function inside the userReducer (or in short the action in the reducer thing) which is "reducer and from there we can change the value of the "state" 
      2. Here the "state" value can be accessed by anywhere in other words it is the global value
      */}
        <Navbar />
        <Routing />
      </userContext.Provider>
    </>
  )
}

export default App
