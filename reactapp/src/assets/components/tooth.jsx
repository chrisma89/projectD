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
    <div className="container-fluid d-flex flex-column align-items-center" style={{backgroundColor : "#032B43", height : "100vh", padding : "40px", color : "#FFBA08"}}>  
      {/* <div>{ageData}</div> */}
    {matchedInfo ? (
      <>  
      <div>Toothbrush : {matchedInfo.toothbrush}</div>
    <div>Brushing Frequency : {matchedInfo.frequency}</div>
    <div>Toothpaste : {matchedInfo.toothpaste}</div>
    <div>Visits to your dentist : {matchedInfo.dentalvisit}</div>
    <div>Dietary advice : {matchedInfo.food}</div>
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