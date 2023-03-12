import React, { useState } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import axios from 'axios';



const CreateIndex = () => {

    const URL="http://rustycoder.live:8080"
    const [state,setState]=useState("")


    const handleChange=(event)=>{
        setState(event.target.value);

    }
    const addIndex=()=>{
        // We will call the api 
        // next we will see how to pass headers as well

        axios.post(`${URL}/createIndex`,{name:state}).then(response=>{
            console.log(response.data);
            setState("")

        }).catch(err=>{
            console.log(err);
        })

    }
  return (
    <div>

<Input placeholder="Index Name"  onChange={handleChange}/>
<Button type="primary" onClick={addIndex}>Add Index</Button>




    </div>
  )
}

export default CreateIndex