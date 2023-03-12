import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {useParams } from 'react-router-dom';


const Showdata = () => {
    let { indexName } = useParams();


    const URL="http://rustycoder.live:8080";
    const [state,setState]=useState([])

    const fetchData=()=>{
        // We will call the api 
        // next we will see how to pass headers as well

        axios.get(`${URL}/get/${indexName}`).then(response=>{
            console.log(response.data);
            setState(response.data)

        }).catch(err=>{
            console.log(err);
        })

    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
<h1>{indexName}</h1>


    </div>
  )
}

export default Showdata