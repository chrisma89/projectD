import dentalinfo from "../../dentalinfo.json";
import CustomInfo from "./custominfo";
import React from "react";
import { useState } from "react";

const ToothInfo = ({childAge, ageUnit}) => {

  
let ageData = `${childAge} ${ageUnit}`
let agedata = localStorage.getItem("agedata")
console.log(agedata)



let matchedInfo = dentalinfo.find(info => agedata === info.id)




  // if (childage)
  return ( 
    <div>  
      {/* <div>{ageData}</div> */}
    {matchedInfo ? (
      <>  
      <div>{matchedInfo.toothbrush}</div>
    <div>{matchedInfo.frequency}</div>
    <div>{matchedInfo.toothpaste}</div>
    <div>{matchedInfo.dentalvisit}</div>
    <div>{matchedInfo.food}</div>
      </>
  )
  :
  (
    <div>No matches found</div>
  )}
   
    </div>
   );
}
 
export default ToothInfo;