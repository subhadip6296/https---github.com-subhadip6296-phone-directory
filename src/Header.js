import React  from 'react';

const Header = function() {
  const headerStyle = {textAlign: 'center',padding:20 ,background: '#000', color:'#fff',textTransform: 'uppercase'}
    return  (
        // <div className='header'>
        // <div style={{textAlign: 'center',padding:20 ,background: '#000', color:'#fff',textTransform: 'uppercase'}}> //INLINE
        
        <div style={headerStyle}>
          Phone directory
        </div>
    )
}

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

export default Header;