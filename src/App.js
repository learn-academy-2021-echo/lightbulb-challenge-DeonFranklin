import {Component} from 'react'
import Header from './Header'
import Light from './Light'
import css from './App.css'

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
      <Light />
      </>
    )
  }
}
export default App;