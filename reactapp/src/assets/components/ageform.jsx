import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
  import React, { useState } from "react";


const Age = () => {

  const [date, setDate] = useState(new Date());
  

  return (
    <>
    <h2>Please input your child's Date of birth</h2>
    <div>
    <DatePicker  dateFormat="dd/MM/yyyy"    peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select" showIcon selected={date} onChange={(date) => setDate(date)} />
    </div>
    </>
    );
}
 
export default Age;