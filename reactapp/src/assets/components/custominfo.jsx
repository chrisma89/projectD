// import React, { useEffect, useState } from "react";
// import dentalinfo from "../../dentalinfo.json"
// import ToothInfo from "./tooth";


// const CustomInfo = () => {
//   let savedBirthdate = JSON.parse(localStorage.getItem("storedDate"));
//   console.log(savedBirthdate);
//   if (!savedBirthdate) {
//     console.log("Date is invalid");
//     return;
//   } else {
//     console.log("birthday", savedBirthdate);
//   }
//  useEffect (()=>{
//     setChildAge(age)
//   },[age])
//   let savedBirthDay = new Date(savedBirthdate);
//   let todayDate = new Date();

//   // splitting today to compare with birth
//   let thisYear = todayDate.getFullYear();
//   let thisMonth = todayDate.getMonth();
//   let thisDay = todayDate.getDate();

//   // splitting birthdate to compare
//   let birthYear = savedBirthDay.getFullYear();
//   let birthMonth = savedBirthDay.getMonth();
//   let birthDay = savedBirthDay.getDate();

//   // calculate age
//   let age = thisYear - birthYear;

//   // usestate hook
//   const [childage, setChildAge] = useState("")
//   const [birthday, setBirthday] = useState("years")

 

//   // validating age calculation
//   if (
//     birthMonth > thisMonth ||
//     (birthMonth === thisMonth && birthDay > thisDay)
//   ) {
//     age--;
//   }

//   if(age <= 1){
//     setBirthday("months")
//    age =   thisMonth - birthMonth ;
   
//    if(age > 1){
    
//   return (
//     <div>
//       Your child is {age} months old
//       <ToothInfo childage={childage} birthday={birthday} />
//     </div>
//   )}
//   else {
//     return (
//       <div>
//         Your child is {age} month old
//         <ToothInfo  childage={childage} birthday={birthday} />
//       </div>
//     )
//   }
//   }
  
  

//   return (
//     <>
//       <h2> Welcome</h2>
//       <div>Your child is {age} years old</div>
//       <ToothInfo childage={childage} birthday={birthday}/>
      
//     </>
//   );
// };

// export default CustomInfo;



// ---------------------------------------------------------------------------
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
  } else {
    setChildAge(ageYears);
    setAgeUnit("years");
  }
  // localStorage.setItem("agedata", `${childAge} ${ageUnit}`)
  // localStorage.setItem("age", {childage}{ageUnit})
  },[])

  // localStorage.setItem("agedata", {childage}{ageUnit})
  // useEffect(() => {
  //   // Ensures childAge and ageUnit are set before updating localStorage
  //   localStorage.setItem("agedata", `${childAge} ${ageUnit}`);
  // }, [childAge, ageUnit]);
  
  

  return (
    <>
      <h2> Welcome</h2>
      <div>Your child is {childAge} {ageUnit} old</div>
      <ToothInfo childAge= {childAge} ageUnit ={ageUnit} />
      
    </>
  );
};

export default CustomInfo;