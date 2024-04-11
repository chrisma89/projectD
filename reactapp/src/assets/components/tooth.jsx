import dentalinfo from "../../dentalinfo.json";
import CustomInfo from "./custominfo";
import React from "react";
import { useRef } from 'react';
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FirstTooth from "./firsttooth";



const ToothInfo = ({ childAge, ageUnit }) => {
  let ageData = `${childAge} ${ageUnit}`;
  let agedata = localStorage.getItem("agedata");
  // console.log(agedata);
  const toothbrushRef = useRef(null);
  const toothpasteRef = useRef(null);
  const techniqueRef = useRef(null);
  const frequencyRef = useRef(null);
  const scheduleRef = useRef(null);
  const foodRef = useRef(null);
  

 

  // Function to scroll to ref
  const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

 
  let matchedInfo = dentalinfo.find((info) => agedata === info.id);

  

  // if (childage)
  return ( 
  <>
  <Navbar expand="lg" style={{
      backgroundColor: "#FFBA08",
      color: "#FFBA08"}}>
        <Navbar.Brand href="#home" style={{fontSize : "2rem", paddingLeft : "10px"}}>Dental Info</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid d-flex justify-content-end align-content-end">
            <Nav.Link onClick={() => scrollToRef(toothbrushRef)}> <img src="/icons/tooth-brush.png" style={{height : "8vh", width : "auto", margin : "4px"}}/></Nav.Link>
            <Nav.Link onClick={() => scrollToRef(toothpasteRef)}><img src="/icons/toothpaste.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            
            <Nav.Link onClick={() => scrollToRef(techniqueRef)}><img src="/icons/brushing.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            <Nav.Link onClick={() => scrollToRef(frequencyRef)}> <img src="/icons/brushingfrquency.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            
            <Nav.Link onClick={() => scrollToRef(scheduleRef)}><img src="/icons/calendar.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            <Nav.Link onClick={() => scrollToRef(foodRef)}><img src="/icons/food.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            {/* Add more Nav.Link elements for each card */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <div  className="container-fluid d-flex flex-column align-items-center justify-content-center"
    style={{
      backgroundColor: "#032B43",
      height: "",
      padding: "40px",
      color: "#FFBA08"}}>
    
      {matchedInfo ? (
        <>
        {/* <div className ="d-flex justify-content-center" style={{backgroundColor: "#FFBA08"}}> */}
         
        {/* </div> */}
        

      <Container className="d-flex justify-content-center align-items-center" style={{ fontSize: "1.6rem" }}>
          Your child is {childAge} {ageUnit} old
        </Container>
          <Container className = "d-flex flex-column" style={{ textAlign: "center" }}>
            {" "}
            <Card ref={toothbrushRef} style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>
                <img src="/icons/tooth-brush.png" style={{height : "10vh", width : "auto"}}></img>
              </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.toothbrush}</Card.Body>
            </Card> 
            <Card ref={toothpasteRef}  style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}> <img src="/icons/toothpaste.png" style={{height : "10vh", width : "auto"}}></img> </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.toothpaste}</Card.Body>
            </Card>
            <Card ref={techniqueRef}  style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}> <img src="/icons/brushing.png" style={{height : "10vh", width : "auto"}}></img> </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.brushingtechnique}</Card.Body>
            </Card>
            <Card ref={frequencyRef} style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}> <img src="/icons/brushingfrquency.png" style={{height : "10vh", width : "auto"}}></img> </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.frequency}</Card.Body>
            </Card>
           
            <Card ref={scheduleRef} style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}><img src="/icons/calendar.png" style={{height : "10vh", width : "auto"}}></img> </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.dentalvisit}</Card.Body>
            </Card>
            <Card ref={foodRef} style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}><img src="/icons/food.png" style={{height : "10vh", width : "auto"}}></img></Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.food}</Card.Body>
            </Card>
          </Container>
        </>
      ) : (
        <div>No matches found</div>
      )}
    </div>
    </>
  );
};

export default ToothInfo;
