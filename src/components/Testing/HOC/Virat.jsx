// import React, { Component } from "react";
// import Club from "./Club";
// class Virat extends Component {
  
//   render() {
//     return (
//       <h1 onMouseOver={this.props.hocHandleShot}>
//         Virat shots {this.props.hocShotName}: {this.props.hocState}
//       </h1>
//     );
//   }
// }
// export default Club(Virat);

import React , { useState} from 'react'
import Club from "./Club";

const Virat = (props) => {
    const {team , hocHandleShot , hocShotName , hocShot} = props
  return (
    <div>
        <h1 style={{color:"red"}}>Team : {team}</h1>
      <h1 onMouseOver={hocHandleShot}>Virat Shots {hocShotName} : {hocShot}</h1>
    </div>
  )
}

export default Club(Virat , "Cover Drive" , 4)
