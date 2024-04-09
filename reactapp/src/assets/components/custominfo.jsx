import React, { useEffect, useState } from "react";
import dentalinfo from "../../dentalinfo.json"
import ToothInfo from "./tooth";


const CustomInfo = () => {

const [childAge, setChildAge] = useState("")
  const [ageUnit, setAgeUnit] = useState("years")

  useEffect(()=>{
      let savedBirthdate = JSON.parse(localStorage.getItem("storedDate"));
  console.log(savedBirthdate);
  if (!savedBirthdate) {
    console.log("Date is invalid");
    return;
  } else {
    console.log("birthday", savedBirthdate);
  }
  let savedBirthDay = new Date(savedBirthdate);
  let todayDate = new Date();

  // splitting today to compare with birth
  let ageYears = todayDate.getFullYear() - savedBirthDay.getFullYear();
  let ageMonths = todayDate.getMonth() - savedBirthDay.getMonth();
  let ageDays = todayDate.getDate() - savedBirthDay.getDate();



  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12; 
  }

  // If less than a year old, show age in months
  if (ageYears === 0 || (ageYears === 1 && ageMonths < 12)) {
    if (ageDays < 0) {
      ageMonths--; 
      
    }
    setChildAge(ageMonths);
    setAgeUnit("months");
    if(ageMonths <= 6){
        localStorage.setItem("agedata", 0)
      }
      else{
        localStorage.setItem("agedata", 1)
      }
    
  } else {
    
    setChildAge(ageYears);
    setAgeUnit("years");
    if (ageYears >= 1 && ageYears <=3 ){
      localStorage.setItem("agedata", 2)
    }
    else if(ageYears > 3 && ageYears <=6){
      localStorage.setItem("agedata", 3)
    }
    else if(ageYears >= 7){
      localStorage.setItem("agedata", 4)
    }
  }
  },[])
  
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{backgroundColor : "#032B43", height : "", padding : "40px", color : "#FFBA08"}}>
      <h2> Dental Information</h2>
      <div style={{ fontSize : "1.6rem"}}>Your child is {childAge} {ageUnit} old</div>
      <ToothInfo childAge= {childAge} ageUnit ={ageUnit} />
      
    </div>
  );
};

export default CustomInfo;