import React from 'react'
import { Input } from 'antd';
import { Button, Space } from 'antd';
import axios from "axios";
import { useState } from 'react';
const { TextArea } = Input;



const Add = () => {
    const defaultValue={
        title:"",
        content:""

    }
    const URL="http://rustycoder.live:8080";
    const IndexName="adityaV2";
    const [state,setState]=useState(defaultValue)

    const addPost=()=>{
        // We will call the api 
        // next we will see how to pass headers as well

        axios.post(`${URL}/add/${indexName}`,state).then(response=>{
            console.log(response.data);
            setState(defaultValue)

        }).catch(err=>{
            console.log(err);
        })

    }

    const  handleChange=(event)=>{
       setState({...state,[event.target.name]:event.target.value});
    }

  return (


    <div>
        <h1>Create your Post </h1>
        <Input placeholder="Title" name='title' onChange={handleChange} value={state.title} />
         <TextArea rows={4} name={'content'} placeholder="maxLength is 600" value={state.content} maxLength={600} onChange={handleChange} />

         <Button type="primary" onClick={addPost}>Add Post</Button>




    </div>
  )
}

export default Add