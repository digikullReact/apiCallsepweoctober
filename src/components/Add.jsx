import React from 'react'
import { Input } from 'antd';
import { Button, Space } from 'antd';
import axios from "axios";
import { useState } from 'react';
const { TextArea } = Input;



const Add = (props) => {
    const [state,setState]=useState({
        name:"",
        age:"",
        address:"",
        tags:""
    })
 
    const  handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value});
     }
  

     const addEmp=()=>{
      /*
        props.addEmployee(state,function(){
          setState({
            name:"",
            age:"",
            address:"",
            tags:""
        })

        });
        */

        props.addEmployee().then(data=>{
          setState({
            name:"",
            age:"",
            address:"",
            tags:""
        })

        }).catch(err=>{

        })
      
     }

  return (


    <div>
        <h1>Register Employee </h1>
        <Input placeholder="Name" name='name' onChange={handleChange} value={state.name} />
         <TextArea rows={4} name={'address'} placeholder="maxLength is 600" value={state.address} maxLength={600} onChange={handleChange} />
         <Input placeholder="Age" name='age' onChange={handleChange} value={state.age} />
         <Input placeholder="Tag" name='tags' onChange={handleChange} value={state.tags} />


         <Button type="primary" onClick={addEmp}>Add Employee</Button>




    </div>
  )
}

export default Add