// import React, { Component } from "react";
// import Club from "./Club";

// class Rohit extends Component {

//   render() {
//     return (
//         <h1 onMouseOver={this.props.hocHandleShot}>
//         Rohit shots {this.props.hocShotName}: {this.props.hocState}
//       </h1>
//     );
//   }
// }
// export default Club(Rohit);

// with FUNCTIONAL COMPONENTS

import React, { useState } from "react";
import Club from "./Club";

const Rohit = (props) => {
    const {team , hocHandleShot , hocShotName , hocShot} = props
  return (
    <div>
        <h1 style={{color:"blue"}} >Team : {team}</h1>
      <h1 onMouseOver={hocHandleShot}>  Rohit Shots {hocShotName} : {hocShot}</h1>
    </div>
  );
};

export default Club(Rohit , "Pull" , 6); 
