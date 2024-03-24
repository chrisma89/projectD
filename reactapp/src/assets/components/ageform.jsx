import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
  import React, { useState } from "react";
  import CustomInfo from "./custominfo";


const Age = () => {

  const [date, setDate] = useState(null);
  const [info, setInfo] = useState(false)
  const displayinfo =()=>{
    setInfo(true)
  }
  
 
  
  if(info){
    return(
      
      <CustomInfo />
      
    )
  }


  return (
    <>
    <h2>Please input your child's Date of birth</h2>
    <div>
    <DatePicker placeholderText="Click to select a date" dateFormat="dd/MM/yyyy"   
      showMonthDropdown
      showYearDropdown
     
     
      dropdownMode="select" showIcon selected={date} onChange={(date) => setDate(date)} />
    </div>
    <div>
      <button onClick={displayinfo}>Get Dental Information</button>
    </div>
   
    </>
    );
}
 
export default Age;