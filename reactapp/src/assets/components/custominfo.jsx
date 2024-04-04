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

const [childage, setChildAge] = useState("")
  const [ageUnit, setageUnit] = useState("years")

  useEffect(()=>{
      let savedBirthdate = JSON.parse(localStorage.getItem("storedDate"));
  console.log(savedBirthdate);
  if (!savedBirthdate) {
    console.log("Date is invalid");
    return;
  } else {
    console.log("birthday", savedBirthdate);
  }
//  useEffect (()=>{
//     setChildAge(age)
//   },[age])
  let savedBirthDay = new Date(savedBirthdate);
  let todayDate = new Date();

  // splitting today to compare with birth
  let thisYear = todayDate.getFullYear();
  let thisMonth = todayDate.getMonth();
  let thisDay = todayDate.getDate();

  // splitting birthdate to compare
  let birthYear = savedBirthDay.getFullYear();
  let birthMonth = savedBirthDay.getMonth();
  let birthDay = savedBirthDay.getDate();

  // calculate age
  let age = thisYear - birthYear;
// setChildAge(age)

  if (
    birthMonth > thisMonth ||
    (birthMonth === thisMonth && birthDay > thisDay)
  ) {
    age--;
  }

  if(age <= 1){
    setageUnit("months")
   age =   thisMonth - birthMonth ;
  }
  setChildAge(age)
  // localStorage.setItem("age", {childage}{ageUnit})
  },[])
localStorage.setItem("agedata", `${childage} ${ageUnit}`)
  // localStorage.setItem("agedata", {childage}{ageUnit})
  
  
  

  return (
    <>
      <h2> Welcome</h2>
      <div>Your child is {childage} {ageUnit} old</div>
      <ToothInfo />
      
    </>
  );
};

export default CustomInfo;