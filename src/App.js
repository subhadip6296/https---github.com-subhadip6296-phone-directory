import React,{ Component } from 'react';
import Header from "./Header";
import './App.css';

class App extends Component {
  clickHandler(message) {
    alert(message);
  }
 render() {
  
  let subscribers = [
    {
      id:1,
      name: "Subhadip Mudi",
      phone: "888888888"
    },
    {
      id:2,
    name: "Gourav Paul",
    phone: "99999999",
    }
  ]
    return (

      
     <div className="component-container">
      <Header heading="Phone Directory"/>
       <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          subscribers.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,"Delete Handler Clicked")}>Delete</button>
              </span>
              </div>
          })
        }

        

    </div>
    </div>
    );
 }
}
  
  export default App;

  // <div>
  //       {/* <div className='header'>
  //         Phone directory
  //       </div> */}
  //       <Header/>
  //       <button> Add </button>
  //       <div>
  //         <span> Name </span><br/>
  //         <span> Phone </span>
  //       </div> 
  //     {/* //    <label htmlFor="name">Name: </label>
  //     //   <input id="name" type="text" placeholder="Type Here" defaultValue="shilpa"/> */}
      
  //     {/* //  <div id="module"></div>
  //     //   <p> REACTJS </p> */}
  //      </div>

  //     // React.createElement("div", { id: "module" },
  //     //   React.createElement("p",null,"ReactJS")
  //     // )
      
  


