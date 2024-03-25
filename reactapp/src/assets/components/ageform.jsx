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
    setInfo(true);
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
    <>
      <h2>Please input your child's Date of birth</h2>
      <div>
        <DatePicker
          placeholderText="Click to select a date"
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          showIcon
          selected={date}
          onChange={(date) => {
            setDate(date);
          }}
        />
      </div>
      {/* <div>
      Your child's age is : 
    </div> */}
      <div>
        <button
          onClick={() => {
            {
              displayinfo;
            }
            storeDate(date);
          }}
        >
          Get Dental Information
        </button>
      </div>
    </>
  );
};

export default Age;
