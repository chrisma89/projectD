import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import CustomInfo from "./custominfo";

const Age = () => {

  // Initialise date to null and then set to date chosen by the user
  // Initialised info page toggle based on user click
  const [date, setDate] = useState(null);
  const [info, setInfo] = useState(false);

  // store the birthdate input by user on the date picker
  useEffect(() => {
    let birthDate = date?.toISOString().split("T")[0];
    localStorage.setItem("storedDate", JSON.stringify(birthDate));

    console.log(birthDate);
  }, [date]);

  // info page toggle done on clicking the button
  const displayinfo = () => {
    if(dats){
      setInfo(true);
    }
    else {
      alert("Please enter valid date")
    }
    
  };

  // conditional to check if info is truthy
  if (info) {
    return <CustomInfo />;
  }

  // retrieving stored birthdate from local storage
  const storeDate = () => {
    let retrievedDate = JSON.parse(localStorage.getItem("storedDate"));

    if (!retrievedDate) {
      console.log("Date is invalid");
      return;
    } else {
      console.log(retrievedDate);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{backgroundColor : "#032B43", height : "100vh", padding : "40px", color : "#FFBA08"}}>
      <h2>Enter child's Date of Birth</h2>
      <div className= "conatiner-fluid d-flex" style= {{padding : "20px"}}>
        <DatePicker 
          placeholderText="Click to select a date"
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          showIcon
          selected={date}
          maxDate={new Date()}
          onChange={(date) => {
            setDate(date);
          }}
        />
      </div>
      {/* <div>
      Your child's age is : 
    </div> */}
      <div>
        <button style={{backgroundColor : "#FFBA08", color : "#032B4", padding : "10px"}}
          onClick={() => {
            {
              displayinfo;
              setInfo(true)
            
            storeDate(date);
            }
          }}
        >
          Get Dental Information
        </button>
      </div>
    </div>
  );
};

export default Age;
