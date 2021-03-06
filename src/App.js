
import React, { Component } from 'react'
import Header from './components/Header'
import AddSubtract from './components/AddSubtract'
import Footer from './components/Footer'
import './App.css'
/* 
- set up react server (/)
- create header (/)
- create interactive square that toggles on and off(/)
-- got the on/off to toggle in box with no text()
- when "off" the background is white (/)
- when "on" the background is yellow (/)
*/

/* 
- set up react server (/)
- create header (/)
- create interactive square that toggles on and off(/)
-- got the on/off to toggle in box with no text()
- when "off" the background is white (/)
- when "on" the background is yellow (/)
*/

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <AddSubtract />
      <Footer />
      </>
    )
  }
}

export default App;
