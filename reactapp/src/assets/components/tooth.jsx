import dentalinfo from "../../dentalinfo.json";
import CustomInfo from "./custominfo";
import React from "react";
import { useState } from "react";

const ToothInfo = ({childAge, ageUnit}) => {

  
let ageData = `${childAge} ${ageUnit}`



  // if (childage)
  return ( 
    <>
    <div>AGEEEEEEEEEEEEEe</div>
    {/* <div>{ageData}</div> */}
    <div>{ageData}</div>
    {/* <div>{childAge} {ageUnit}</div> */}
    <div>
       {dentalinfo.map((agegroup)=> {
       <div>
        {agegroup.toothbrush}
       </div> 
    })}
    </div>
   
    </>
   );
}
 
export default ToothInfo;