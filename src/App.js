
import React, { Component } from 'react'

class Counter extends Component {
  constructor () {
    super();
    this.state = {
      counter: 0,
      toggle: true, //initialized at single incremements
      
    };
  }

//=======[EVENTS]============
handleIncrement = () => {//method for button to run when increment button is clicked
    //state change for incrementing within range max of 20
    if (this.state.counter < 20) {
      if (this.state.toggle) {
        this.setState({ counter: this.state.counter + 1 }); //increments by 1 depending on state of toggle
      } else {
        this.setState({ counter: this.state.counter + 2 }); //increments by 2 depending on state of toggle
      }
    } else { //state counter is more than twenty causes an alert pops up and resets the state of counter back to zero
      this.handleReset();
      alert('Your counter is out of number range! STARTING OVER!');
    }
    
  };
 
 handleDecrement = () => {
   //state change for incrementing within range min of 0
  if (this.state.counter > 0) {
    if (this.state.toggle) {
      this.setState({ counter: this.state.counter - 1 }); //decrements by 1 depending on state of toggle
    } else {
      this.setState({ counter: this.state.counter - 2}); //decrements by 2 depending on state of toggle
    }
  } else { //state counter is less than zero causes an alert pops up and resets the state of counter back to zero
    this.handleReset();
    alert('Your counter is out of number range! STARTING OVER!');
    
  }
};

handleReset = () => { //method that causes state of counter to be zero
    this.setState({
      counter: 0
    })
};

handleToggle = () => { //toggles between incrementing/decrementing by 1 or 2
  
  if (this.state.toggle) { //condition is set to this.state.toggle which is initialized at true
    this.state.toggle = !this.state.toggle; //changes current state of toggle - true/false, true is at increment/decrement of 1, false is at increment/decrement of 2
    
  } else {
    this.state.toggle = true;
    
  }
};


//=======[RENDER]============

render() {
  return (

    <div className = "container">
       <div className="navbar">Keep Count From 0 to 20</div>
       <div className="counter">
         

         <h1>{this.state.counter}</h1> 

         <button type="button" onClick = {this.handleIncrement}> + </button>
         <button type="button" onClick = {this.handleDecrement}> - </button>
         <button type="button" onClick = {this.handleReset}>Reset</button>
         <button type="button" onClick={this.handleToggle}>{this.state.toggle ? "Change to + / -  2" : "Back to + / -  1"}</button>
       </div>
    </div>
  );
}

}

export default Counter;
