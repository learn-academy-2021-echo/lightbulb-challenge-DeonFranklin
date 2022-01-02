import react, {Component} from 'react';
import Bulb from './Bulb';
import lightoff from './Images/lightoff.png';
import lighton from './Images/lighton.png';
import switchon from './Images/switchon.png';
import switchoff from './Images/switchoff.png';


class Light extends Component {
    constructor(props) {
      super(props);
      // setup box with position off and color set to white.
        this.state = {
          lightStatus: "Click here to Start",
          background: "white",
          lightImage: lightoff,
          switchImage: switchoff
        };
      }
      //set the up the function for engaging and disengaging the box.
      switch = () => {
      if (this.state.lightStatus === "Off") {
        //light should be white when off.
        this.setState({lightStatus: "On", 
                        background: "yellow",
                        lightImage: lighton,
                        switchImage: switchon})
       } else { 
           this.setState({lightStatus: "Off", 
                          background: "white",
                          lightImage: lightoff,
                          switchImage: switchoff})
       }
   };
      render(){
        return (
            <>
            <Bulb lightImage={this.state.lightImage} />
            <br>
            </br>
              <div>

    <button className="switchButton">
     <img 
     height="90px" 
     width="90px" 
     src={this.state.switchImage} 
     alt="lightSwitch"
 
      onClick={this.state.switchImage} /></button>
      <br>
      </br>
              <button
                 id = "switchButton"
                 onClick = {this.switch} 
                 style = {{
                   background: this.state.background
                   }} 
              >              
                 {this.state.lightStatus}
            </button>
            </div>
            </>
        );
      };
    }
    export default Light;
