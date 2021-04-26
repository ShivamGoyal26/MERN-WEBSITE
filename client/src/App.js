import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Error from './components/Error'

const App = () => {
  return (
    <>
      <Navbar />

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

      <Route>
        <Error />
      </Route>

      </Switch> 
    </>
  )
}

export default App
