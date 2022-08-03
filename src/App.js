import React, { useState } from "react";
import InputForm from "./Components/Form/InputForm";
import classes from './App.module.css';
import { Routes, Route} from "react-router-dom";
import Lists from "./Components/List/List";

const App=()=>{ 
  
  const [checks,setChecks]=useState(false);

  const dataHandler=()=>{  
  setChecks(true);
  }

 
  const testHandler=()=>{    
   setChecks(false);
  }

  return (
  <div className={classes}>    
   
    <Routes>        
     <Route path="/" element={<InputForm validHandler={dataHandler}/>}/>   
      <Route path="/home" element={<Lists authorized={checks} checkHandler={testHandler}/>}/> 
    </Routes>  
   
   </div>
   
  
  );
}


export default App; 
