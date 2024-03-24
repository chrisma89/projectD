import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
  import React, { useEffect, useState } from "react";
  import CustomInfo from "./custominfo";


const Age = () => {

  const [date, setDate] = useState(null);
  const [info, setInfo] = useState(false)

  useEffect(()=>{
    localStorage.setItem("storedDate", JSON.stringify(date));

    console.log("storedDate")
  }, [date])
  const displayinfo =()=>{
    setInfo(true)
  }
  
 
  
  if(info){
    return(
      <CustomInfo />
      )
  }

  const storeDate =() =>{
 
  


   let retrievedDate = localStorage.getItem("storedDate");
   let currentAge = Date() - retrievedDate;
   console.log("retrievedDate" , retrievedDate);
   console.log("date", Date())
   console.log(currentAge)
  
}

  return (
    <>
    <h2>Please input your child's Date of birth</h2>
    <div>
    <DatePicker placeholderText="Click to select a date" dateFormat="dd/MM/yyyy"   
      showMonthDropdown
      showYearDropdown
     
     
      dropdownMode="select" showIcon selected={date} onChange={(date) => { setDate(date) ;storeDate(date)}}
       />
    </div>
    {/* <div>
      Your child's age is : 
    </div> */}
    <div>
      <button onClick={displayinfo}>Get Dental Information</button>
    </div>
   
    </>
    );
}
 
export default Age;