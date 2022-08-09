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

 
<<<<<<< HEAD
  const testHandler=()=>{  
=======
  const testHandler=()=>{    
>>>>>>> 20a6f63916bff973fa9877484381496fa2ea6c0b
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
