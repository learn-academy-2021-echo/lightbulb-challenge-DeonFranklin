import React, {Component} from 'react'


// <!-- generated an onclick 
// <!-- lightoff.png is the turn off light image -->

   // implementation of flipSwitch function -->
   // taking image in image variable
   //Match the image name
   //whether it is lighton or lightoff
   //change image to lightoff.png if
   //it match with lighton otherwise
   //change it to lighton.png -->

class Bulb extends Component {
  render(){
    return(
    <div className="lightbulb">
        <img
        src={this.props.lightImage}
        alt="LightBulb"
        style={{ height: "150px" }}
        />
      </div>
    );
  }
} 
export default Bulb;
