
import React, { Component } from 'react';
import sheep from "./sheep.png";

class Counter extends Component {
  constructor () {
    super();

    this.state = {
      counter: 0,
      toggle: true, //initialized at single incremements
      doublesAvailable: true, //incrementing/decrementing by 2 option is available/"true" at initialization
      oneSheepImg: true
    };
  
  }

//=======[EVENTS]============
handleIncrement = () => {//method for button to run when increment button is clicked
    //state change for incrementing within range max of 20

    if (this.state.counter < 20) { //if state counter is less than 20, allow incrementing 
    
      if (this.state.toggle) {
        this.setState({ counter: this.state.counter + 1 }); //increments by 1 depending on state of toggle
      } else {
        this.setState({ counter: this.state.counter + 2 }); //increments by 2 depending on state of toggle
      }

    } else { //state counter is more than 20 causes an alert pops up and resets the state of counter back to zero
      this.handleReset();
      alert('SORRY, YOU DID NOT RAISE ENOUGH SHEEP FOR THIS SLEEPLESS NIGHT! COUNT THEM OVER AGAIN!');
    }
    
  };
 
handleDecrement = () => {
   //state change for incrementing within range min of 0

  if (this.state.counter > 0) { //if state counter is more than 0, allow decrementing

    if (this.state.toggle) {
      this.setState({ counter: this.state.counter - 1 }); //decrements by 1 depending on state of toggle
    } else {
      this.setState({ counter: this.state.counter - 2}); //decrements by 2 depending on state of toggle
    }

  } else { //state counter is less than zero causes an alert pops up and resets the state of counter back to zero
    this.handleReset();
    alert('YOUR SHEEP RAN OFF RANGE! START COUNTING UP!');
  }

};

handleReset = () => { //method that causes state of counter to return to zero

  this.setState({
    counter: 0
  })

};

handleToggle = () => { //toggles between incrementing/decrementing by 1 or 2 and the text displayed in toggle button
  
  this.setState(
    function(prevState) { //function passes prevState, which is current values of state properties. prevState starts at increments/decrements of 1
      return {doublesAvailable: !prevState.doublesAvailable, //changes state properties and shows what option is available on toggle button: 
        //if toggle button displays 'change to + / - 2', then counter is incrementing/decrementing by 1, if it displays 'back to 1', then counter is incrementing/decrementing by 2
      toggle : !prevState.toggle}; //toggles between which increment/decrement option is available
    });
    //when toggle button is pressed/clicked, the state properties are changed to false
    //so toggle initalized as true and incrementing/decrementing by 1, now is false and increments/decrements by 2
    //AND toggle button initalized as true, not is false and displays the option to return to incrementing/decrementing by 1 
    
};


//=======[RENDER]============

render() {
  return (

    <div className = "container"> 

      <div className="navbar">count sheep</div>  {/* COMPONENT TITLE */}
      
        <div className= "componentParts">

          <div className="counter"> {/* COUNTER COMPONENT WRAPPER*/}
            
            <h1>{this.state.counter}</h1> {/*DISPLAYS CURRENT COUNT*/}

            <div className="buttonWrapper">

              <button type="button" className = "plusBtn" onClick = {this.handleIncrement}> + </button> {/* Adds 1 or 2 depending on toggle state */}

              <button type="button" className = "minusBtn"  onClick = {this.handleDecrement}> - </button> {/*Subtracts 1 or 2 depending on toggle state */}

              <button type="button" className = "zeroBtn" onClick = {this.handleReset}>Reset</button> {/* Resets counter count to zero */}

              <button type="button" className = "toggleBtn" onClick={this.handleToggle}>{this.state.doublesAvailable ? "Change" : "Back"}</button> {/* Allows toggle between adding/subtracting by 1 or 2 */}

            </div>

          </div>

          <div className = "images">
            <div className = "sheepContainer">
            <img className = "sheep" src={sheep} alt="sheep image"/>
            </div>

            <img className = "fence" src="" alt="fence image"/>

          </div>

      </div> 
    </div>
  );
}

}

export default Counter;
