import dentalinfo from "../../dentalinfo.json";
import CustomInfo from "./custominfo";
import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';




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
      
    <Card>
    <Card.Title style={{textAlign : "center"}}>Toothbrush :</Card.Title>
      <Card.Body>{matchedInfo.toothbrush}</Card.Body>
    </Card>
    <Card>
    <Card.Title>Brushing Frequency : </Card.Title>
      <Card.Body>{matchedInfo.frequency}</Card.Body>
    </Card>
    <Card>
    <Card.Title>Toothpaste : </Card.Title>
      <Card.Body>{matchedInfo.toothpaste}</Card.Body>
    </Card>
    <Card>
    <Card.Title>Visits to your dentist : </Card.Title>
      <Card.Body>{matchedInfo.dentalvisit}</Card.Body>
    </Card>
    <Card>
    <Card.Title>Dietary advice : </Card.Title>
      <Card.Body>{matchedInfo.food}</Card.Body>
    </Card>

   
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