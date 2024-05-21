import React, { useState , useMemo, useRef } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState();
  const [renderState , setRenderState] = useState(0);  
  const myInput = useRef(); 
  
  
  const handleBirthDaySubmit = () => {
    console.log("birthdate set")
    setBirthDate(myInput.current.value);
  };

//   const handleInputChange = (e) => {
//     setBirthDate(e.target.value);
//   };

  const calculateAge = useMemo(() => {
    if (!birthDate) return null;
    const currentYear = new Date().getFullYear();
    return currentYear - birthDate;
  } , [birthDate])

  console.log("render");

  return (
    <div>
      <h2>Age Calculator</h2>
      {calculateAge ? <p>Your age is {calculateAge}</p> : null}

      <input ref={myInput}
        placeholder="Enter your birthday date"
      />
      
      <button onClick={handleBirthDaySubmit}>Submit</button>
      <button onClick={()=>{setRenderState(renderState + 1)}}>Rendered</button>
    </div>
  );
};

export default AgeCalculator;
