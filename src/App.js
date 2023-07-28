import React,{ Component } from 'react';
import Header from "./Header";
class App extends Component {
 render() {
    return (
      <div>
        {/* <div className='header'>
          Phone directory
        </div> */}
        <Header/>
        <button> Add </button>
        <div>
          <span> Name </span><br/>
          <span> Phone </span>
        </div> 
      {/* //    <label htmlFor="name">Name: </label>
      //   <input id="name" type="text" placeholder="Type Here" defaultValue="shilpa"/> */}
      
      {/* //  <div id="module"></div>
      //   <p> REACTJS </p> */}
       </div>

      // React.createElement("div", { id: "module" },
      //   React.createElement("p",null,"ReactJS")
      // )
    );
 }
}
  
  export default App;
  


