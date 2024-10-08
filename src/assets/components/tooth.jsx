import dentalinfo from "../../dentalinfo.json";
import CustomInfo from "./custominfo";
import React from "react";
import { useRef } from 'react';
import { useState, useEffect } from "react";
import { Card, Container, Navbar, Nav, Collapse } from 'react-bootstrap';
import FirstTooth from "./firsttooth";
import ageform from "./ageform"



const ToothInfo = ({ childAge, ageUnit }) => {
  let ageData = `${childAge} ${ageUnit}`;
  let agedata = localStorage.getItem("agedata");

  const [open, setOpen] = useState(false);

  const toggleCollapse = () => setOpen(false);
  // console.log(agedata);
  const toothbrushRef = useRef(null);
  const toothpasteRef = useRef(null);
  const techniqueRef = useRef(null);
  const frequencyRef = useRef(null);
  const scheduleRef = useRef(null);
  const foodRef = useRef(null);
  const adviceRef = useRef(null);
  const interdentalRef = useRef(null);
  

  // Funtion to navigate to homepage
  const [showAgeform , setAgeform] = useState(false)

  // Function to scroll to ref
  const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

 
  let matchedInfo = dentalinfo.find((info) => agedata === info.id);

  // let foodAdvice = JSON.parse(matchedInfo.food).text.split('. ');

  const food = () => {
    return matchedInfo.food.map((sentence, index) => (
      <p key={index}>{sentence}</p>
    ));
  }


  const brushing = () => {
    return matchedInfo.brushingtechnique.map((sentence, index) => (
      <p key={index}>{sentence}</p>
    ));
  }

  const toothpaste = () => {
    return matchedInfo.toothpaste.map((sentence, index) => (
      <p key={index}>{sentence}</p>
    ));
  }

  const toothbrush = () => {
    return matchedInfo.toothbrush.map((sentence, index) => (
      <p key={index}>{sentence}</p>
    ));
  }

  const interdental = () => {
    return matchedInfo.interdental.map((sentence, index) => (
      <p key={index}>{sentence}</p>
    ));
  }
  // const sentences = text.split('. ');

  // if (childage)
  return ( 
  <>
  <Navbar expand="lg" style={{
      backgroundColor: "#FFBA08",
      color: "#FFBA08"}}>
        {/* <Navbar.Brand onClick={() => setAgeform(!showAgeform)} style={{fontSize : "2rem", paddingLeft : "10px"}}>FIRSTTOOTH</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid d-flex justify-content-end align-content-end">
          <Nav.Link onClick={() => setAgeform(!showAgeform)} style={{fontSize : "2rem", paddingLeft : "10px"}}>FIRSTTOOTH</Nav.Link>
            <Nav.Link onClick={() =>{toggleCollapse(); scrollToRef(toothbrushRef)}}> <img src="/icons/tooth-brush.png" style={{height : "8vh", width : "auto", margin : "4px"}}/></Nav.Link>
            <Nav.Link onClick={() =>{toggleCollapse(); scrollToRef(toothpasteRef)}}><img src="/icons/toothpaste.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            <Nav.Link onClick={() => {toggleCollapse(); scrollToRef(interdentalRef)}}><img src="/icons/interdental.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            <Nav.Link onClick={() =>{toggleCollapse(); scrollToRef(techniqueRef)}}><img src="/icons/brushing.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            <Nav.Link onClick={() => {toggleCollapse(); scrollToRef(frequencyRef)}}> <img src="/icons/brushingfrquency.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            
            <Nav.Link onClick={() =>{toggleCollapse(); scrollToRef(scheduleRef)}}><img src="/icons/calendar.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            <Nav.Link onClick={() =>{toggleCollapse(); scrollToRef(foodRef)}}><img src="/icons/food.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            <Nav.Link  onClick={() =>{toggleCollapse(); scrollToRef(adviceRef)}}><img src="/icons/advice.png" style={{height : "8vh", width : "auto",  margin : "4px"}}></img></Nav.Link>
            
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
        

      <Container className="d-flex justify-content-center align-items-center" style={{ fontSize: "2rem" , padding : "20px", margin : "20px"}}>
          Dental advice for your {childAge} {ageUnit} old
        </Container>
          <Container className = "d-flex flex-column" style={{ textAlign: "center" }}>
            {" "}
            <Card ref={toothbrushRef} style={{margin : "20px", padding : "20px",  backgroundColor: "rgba(255, 186, 8, 1)" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Toothbrush 
                <img src="/icons/tooth-brush.png" style={{height : "10vh", width : "auto"}}></img>
              </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{toothbrush()}</Card.Body>
            </Card> 
            <Card ref={toothpasteRef}  style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Toothpaste <img src="/icons/toothpaste.png" style={{height : "10vh", width : "auto"}}></img> </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{toothpaste()}</Card.Body>
            </Card>
            <Card ref={interdentalRef}  style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Interdental Cleaning <img src="/icons/interdental.png" style={{height : "10vh", width : "auto"}}></img> </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{interdental()}</Card.Body>
            </Card>
            <Card ref={techniqueRef}  style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Brushing Technique <img src="/icons/brushing.png" style={{height : "10vh", width : "auto"}}></img> </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{brushing()}</Card.Body>
            </Card>
            <Card ref={frequencyRef} style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Brushing Frequency <img src="/icons/brushingfrquency.png" style={{height : "10vh", width : "auto"}}></img> </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.frequency}</Card.Body>
            </Card>
           
            <Card ref={scheduleRef} style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Dental Visits <img src="/icons/calendar.png" style={{height : "10vh", width : "auto"}}></img> </Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.dentalvisit}</Card.Body>
            </Card>
            <Card ref={foodRef} style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Dietary Advice <img src="/icons/food.png" style={{height : "10vh", width : "auto"}}></img></Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{food()}</Card.Body>
            </Card>
            <Card ref={adviceRef} style={{margin : "20px", padding : "20px", backgroundColor : "#FFBA08" , color : "#032B43"}}>
              <Card.Title style={{fontSize : "2rem"}}>Dental Advice <img src="/icons/advice.png" style={{height : "10vh", width : "auto"}}></img></Card.Title>
              <Card.Body style={{fontSize : "1.6rem"}}>{matchedInfo.advice}</Card.Body>
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
