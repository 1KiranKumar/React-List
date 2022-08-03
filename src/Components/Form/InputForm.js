import React, { useState } from "react";
import classes from './InputForm.module.css';
import {useNavigate} from "react-router-dom";


const InputForm=(props)=>{
let navigate=useNavigate();
const [name,setName]=useState("");
const [pass,setPass]=useState("");
const [valid,setValid]=useState(true);

  const submitHandler=(event)=>{
    event.preventDefault();   
    if(name.trim().length===0 || pass.trim().length===0)
    {
      setValid(false);
      return;
    } 
    else{
      setValid(true);
      props.validHandler();
      navigate("/home");
    }
 
  }

  const userHandler=(event)=>{
    setName(event.target.value);
  };

  const passHandler=(event)=>{
    setPass(event.target.value);
  };

  return(
    <div>
    <h1 className={classes.top}>Login Form</h1>
   {valid===false && <p className={classes.p}>Please Enter valid inputs</p>}
    <div className={classes.input}>     
     <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text" 
            onChange={userHandler}         
          ></input>
          <label htmlFor="age">Password</label>
          <input
            name="password"
            type="password"
            onChange={passHandler}           
          ></input>
           <button>Submit</button>
        
        </form>
  </div>
  </div>
  );
}

export default InputForm;