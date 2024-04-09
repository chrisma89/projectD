import dentalinfo from "../../dentalinfo.json";
import CustomInfo from "./custominfo";
import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
const ToothInfo = ({ childAge, ageUnit }) => {
  let ageData = `${childAge} ${ageUnit}`;
  let agedata = localStorage.getItem("agedata");
  console.log(agedata);

  let matchedInfo = dentalinfo.find((info) => agedata === info.id);

  // if (childage)
  return (
    <div>
      {/* <div>{ageData}</div> */}
      {matchedInfo ? (
        <>
          <Container className = "d-flex flex-column" style={{ textAlign: "center" }}>
            {" "}
            <Card style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>
                <img src="public/icons/tooth-brush.png" style={{height : "10vh", width : "auto"}}></img>
              </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.toothbrush}</Card.Body>
            </Card>
            <Card style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Brushing Frequency : </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.frequency}</Card.Body>
            </Card>
            <Card style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Toothpaste : </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.toothpaste}</Card.Body>
            </Card>
            <Card style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Visits to your dentist : </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.dentalvisit}</Card.Body>
            </Card>
            <Card style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Dietary advice : </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.food}</Card.Body>
            </Card>
          </Container>
        </>
      ) : (
        <div>No matches found</div>
      )}
    </div>
  );
};

export default ToothInfo;
