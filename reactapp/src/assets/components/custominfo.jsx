const CustomInfo = () => {
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
  let thisYear = todayDate.getFullYear();
  let thisMonth = todayDate.getMonth();
  let thisDay = todayDate.getDate();

  // splitting birthdate to compare
  let birthYear = savedBirthDay.getFullYear();
  let birthMonth = savedBirthDay.getMonth();
  let birthDay = savedBirthDay.getDate();

  // calculate age
  let age = thisYear - birthYear;

  // validating age calculation
  if (
    birthMonth > thisMonth ||
    (birthMonth === thisMonth && birthDay > thisDay)
  ) {
    age--;
  }

  return (
    <>
      <h2> Welcome</h2>
      <div>Your child is {age} years old</div>
    </>
  );
};

export default CustomInfo;
