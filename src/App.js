import React,{ Component } from 'react';
class App extends Component {
 render() {
    return (
      <div>
        {/* <div className='header'>
          Phone directory
        </div>
        <button> Add </button>
        <div>
          <span> Name </span><br/>
          <span> Phone </span>
        </div> */}
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" placeholder="Type Here" defaultValue="shilpa"/>
      </div>
    );
 }
}
  
  export default App;
  


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
