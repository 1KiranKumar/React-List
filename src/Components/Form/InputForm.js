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
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" onChange={userHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={passHandler}  className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
  </div>
  );
}

export default InputForm;