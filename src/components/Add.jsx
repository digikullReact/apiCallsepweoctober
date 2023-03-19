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

    const [errors,setErrors]=useState({
      name:"",
      address:""
    })
 
    const  handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value});
     }

     function checkErrors(state){
      let errors={}
      if(state.name.length==0){
         errors.name="Name Cannot be empty"
      }else if(state.name.length<5){

         errors.name="Minimum Name should be 5";

      }

      if(state.address.length == 0){
        //alert("Please enter proper name")
        errors.address="Address Cannot be empty"

      }

      if(state.age.length == 0){
        //alert("Please enter proper name")
        errors.age="Age Cannot be empty"

      }

      return errors;

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



        //befor passing data in the method you can put validation and show error messages to user
      
    if(Object.keys(checkErrors(state)).length>0){
      setErrors(checkErrors(state));

    }else{
      setErrors({
        name:"",
        age:"",
        address:"",
        tags:""
    })
      props.addEmployee(state);
    }
       



      
     }

  return (


    <div>
        <h1>Register Employee </h1>
        <label style={{color:"red"}}>{errors.name}</label>
        <Input placeholder="Name" name='name' onChange={handleChange} value={state.name} />
         
        <label style={{color:"red"}}>{errors.address}</label>

         <TextArea rows={4} name={'address'} placeholder="maxLength is 600" value={state.address} maxLength={600} onChange={handleChange} />
         <label style={{color:"red"}}>{errors.age}</label>

         <Input placeholder="Age" name='age' onChange={handleChange} value={state.age} />
         <Input placeholder="Tag" name='tags' onChange={handleChange} value={state.tags} />


         <Button type="primary" onClick={addEmp}>Add Employee</Button>




    </div>
  )
}

export default Add