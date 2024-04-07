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
    <>
    <div>AGEEEEEEEEEEEEEe</div>
    {/* <div>{ageData}</div> */}
    <div>{ageData}</div>
    {matchedInfo ? (
    <div>{matchedInfo}</div>
    )
  :
  (
    <div>NO matches found</div>
  )}
   
    </>
   );
}
 
export default ToothInfo;