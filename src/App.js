//import React, { Component } from 'react'
//imrc for react component shortcut through react snippet package
//imr for react without class components through react snippet package
//========================================================================
//Below writes hello world yay! on page 
//class HelloWorld extends Component {
//   render() {
//     return (
//       <div>Hello World Yay!</div>
//     )
//   }
// }

// export default HelloWorld;
//always remember to export the class
//==========================================================================
import React, { Component } from 'react'

class Counter extends Component {
  constructor () {
    super();
    this.state = {
      //initalizes counter at zero....colon used with objects
      counter: 0,


    }
  }

render() {
  //shows that the counter is displaying properly at initialized zero
  console.log("This is line 32 representing state", this.state.counter); 

  return (
    <div className = "container">
       <div className="navbar">Counter.js</div>
       <div className="counter">
         <h1>What do we put here?</h1>
         <button type="button">Increment</button>
         <button type="button">Decrement</button>
       </div>
    </div>
  )
}

}

export default Counter;
//alt shift down/up copies current line below or above depending on copy placement desires