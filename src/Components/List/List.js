import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,Navigate } from "react-router-dom";
import Card from "../../Cards/Card";
import classes from './List.module.css';
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Page_Number=1;

const Lists=(props)=>{

    const [state,setState]=useState([]);
    const [page,setPage]=useState(Page_Number);

    const detailHandler=()=>{
        props.checkHandler();
    }

    useEffect(()=>{        
        async function result(){
            const fetchedData=await axios.get(`https://randomuser.me/api/?page=${page}&results=10`);
            const reqData=fetchedData.data.results;
            setState((oldState)=>[...oldState,...reqData]);
    }       
    result();
},[page]);

const fetchMoreData = () => {
        setPage(page+1);        
  };

    if(props.authorized===false){
        return <Navigate to="/"></Navigate>
    }

    return (        
        <div>
          <nav>
                <Link to="/" className={classes.li}>{<button onClick={detailHandler} className={classes.button}>Logout</button>}</Link>
        </nav>
        
        <InfiniteScroll
        className={classes.new}
          dataLength={state.length}
          next={fetchMoreData}
          hasMore={state.length!==500}          
          loader={<Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>}
        >
        {state.map((singleData,i)=>{
           return( <Card key={i} className={classes.outer}>            
            <img src={singleData.picture.medium} alt=""></img>
            <div>Name: {singleData.name.first}</div>
            <div>Mail: {singleData.email}</div>
            <div>Phone No: {singleData.cell}</div>        
        </Card>)
        })}
        </InfiniteScroll>       
        </div>
    )
}

export default Lists;