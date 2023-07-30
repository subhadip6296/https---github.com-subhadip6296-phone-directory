// import React  from 'react';
// import './Header.css';

// const Header = function(props) {
  // const headerStyle = {textAlign: 'center',padding:20 ,background: '#000', color:'#fff',textTransform: 'uppercase'}
    // return  (
        // <div className='header'>
        // <div style={{textAlign: 'center',padding:20 ,background: '#000', color:'#fff',textTransform: 'uppercase'}}> //INLINE
        
        // <div style={headerStyle}>
//         <div className='header'>
//           {this.props.heading}
//           {/* Phone directory */}
//         </div>
//     )
// }

//class component
// class Header extends Component {
//     render() {
//         return (
//           <div className='header'>
//             Phone directory
//           </div>
//         )
//     }
// }

// export default Header;


import React, {Component}  from 'react';
import './Header.css';

class Header extends Component {
  render() {

    return (
      <div className="header">
       {this.props.heading}
      </div>
    )
  }
}

export default Header;