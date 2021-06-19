import React, {useState, useEffect} from 'react';
import './App.css';

export default function ValidationForm() {  

const [password, setPassword] = useState({inputOne: "", inputTwo: ""});
const [length, setlength] = useState();
const [upperCase, setUpperCase] = useState();
const [lowerCase, setLowerCase] = useState();
const [some, setSome] = useState();
const [match, setMatch] = useState();
const [number, setnumber] = useState();
       
  useEffect(() => {       
   setlength(password.inputOne.length >= 6 ? true : false);
   setUpperCase(password.inputOne.toLowerCase() !== password.inputOne);
   setLowerCase(password.inputOne.toUpperCase() !== password.inputOne);
   setnumber(/\d/.test(password.inputOne));
   setMatch(password.inputOne && password.inputOne === password.inputTwo);
   setSome(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password.inputOne));       
   }, 
   [password.inputOne, password.inputTwo]);
  
let inputOneValue = (e) => {
  setPassword({ ...password, inputOne: e.target.value });
};
let inputTwoValue = (e) => {
  setPassword({ ...password, inputTwo: e.target.value });
};
let inputChek = (e) => {
  if(e){
    return <p>Correct</p>
  }
};

return (
<div className='App'>
  <div>
    First Password:<input 
      onChange={inputOneValue} 
      type='text' />
  </div>
  <div>
    Second Password:<input 
      onChange={inputTwoValue} 
      type='text' />
</div>
  <div>    
      <p>
        Length
        {inputChek(length)} 
      </p>
      <p>
        Number
        {inputChek(number)}
      </p>
      <p>
        UpperCase
        {inputChek(upperCase)} 
      </p>
      <p>
        LowerCase
        {inputChek(lowerCase)} 
      </p>
      <p>
        Special Character
        {inputChek(some)} 
      </p>
      <p>
        Match
        {inputChek(match)} 
      </p>
  </div>
</div>
    );
  }


