import react, {Component} from 'react'

class Light extends Component {
    constructor(props) {
      super(props)
      // setup box with position off and color set to white.
        this.state = {
          lightStatus: "Off",
          lightColor: "white",
          isToggleOn: false,
        };
      }
      //set the up the function for engaging and disengaging the box.
      switch = () => {
      if (this.state.lightStatus === "On") {
        this.setState({lightStatus: "Off", lightColor: "white"})
       } else { 
           this.setState({lightStatus: "On", lightColor: "yellow"})
       }
   }
      render(){
        return (
          <>
                 <button 
                 id = "switchButton" 
                 onClick = {this.switch} 
                 style = {{
                   margin: 40, 
                   height: 125, 
                   width: 125, 
                   background: this.state.lightColor
                   }} 
                 > 
                 {this.state.lightStatus}
          </button>
          </>
        );
      };
    }
    export default Light;