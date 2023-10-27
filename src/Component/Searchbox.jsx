import { Component } from "react";
import React from 'react'



const Searchbox = (props) => {
  console.log(props)
  const { className, placeholder, OnChange } = props;
  return (
    <div className="">
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={OnChange}
      />
    </div>
  )
}

export default Searchbox


// const Searchbox = (props) => {
//   return (
//     <div className="">
//       <input
//         type="search"
//         className={`search-box ${props.className}`}
//         placeholder={props.placeholder}
//         onChange={props.OnChange}
//       />
//     </div>
//   )
// }

// export default Searchbox





// const Searchbox = ({ className, placeholder, OnChange }) => {
//   return (
//     <div className="">
//       <input
//         type="search"
//         className={`search-box ${className}`}
//         placeholder={placeholder}
//         onChange={OnChange}
//       />
//     </div>
//   )
// }
// export default Searchbox



// class Searchbox extends Component {
//   render() {
//     return (
//       <div className="">
//         <input
//           type="search"
//           className={`search-box ${this.props.className}`}
//           placeholder={this.props.placeholder}
//           // value={searchQuery}
//           onChange={this.props.OnChangeHandler}
//         />
//       </div>
//     );
//   }
// }

// export default Searchbox;