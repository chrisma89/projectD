import dentalinfo from "../../dentalinfo.json";
import CustomInfo from "./custominfo";
import React from "react";
import { useState } from "react";

const ToothInfo = ({childAge, ageUnit}) => {

  


  // if (childage)
  return ( 
    <>
    <div>AGEEEEEEEEEEEEEe</div>
    {/* <div>{ageData}</div> */}
    <div>{childAge} {ageUnit}</div>
    </>
   );
}
 
export default ToothInfo;