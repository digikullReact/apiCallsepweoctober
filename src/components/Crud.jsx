import {MyTable} from './Table';
import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Button, Col, Row } from 'antd';
import Add from './Add';
import Model from './Model';
import {useNavigate} from "react-router-dom";


const Crud = () => {
  const URL="http://rustycoder.live:8080";
  const indexName="employee";
  const [state,setState]=useState([]);
  const [flag,setFlag]=useState(false);
  const [showModal,setShowModal]=useState(false);
  const navigate=useNavigate();

  const getData=async()=>{
    try {
      const headers = {
        token:localStorage.getItem("token")
      };
      let response=await axios.get(`${URL}/get/${indexName}`,{headers});
      console.log(response.data)
      setState(modifyData(response.data));

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    getData(indexName)

  },[flag])

  const modifyData=(arr)=>{
    return arr.map(ele=>{
      
      return {...ele._source,id:ele._id}
    })

  }

  const deleteData=async (id)=>{
    const headers = {
      token:localStorage.getItem("token")
    };

    try {
      let response=await axios.delete(`${URL}/remove-post/${id}`,{ data: { name: indexName },headers:headers });
     
      setFlag(!flag);

    } catch (error) {
      console.log(error);
    }

  }

 

  const handleModal=()=>{
    //debugger;
    setShowModal(!showModal);
  }

  const editEmployee=(data,cb)=>{
    console.log(data);
    // We will call the api 
    // next we will see how to pass headers as well
return new Promise((res,rej)=>{
  const headers = {
    token:localStorage.getItem("token")
  };
  const payload={
    ...data
  }
  delete payload.id;
  payload.indexName=indexName;

  // we have to delete the id from the data
  axios.put(`${URL}/edit-post/${data.id}`,payload,{headers:headers}).then(response=>{

  

    // console.log(response.data);
     setFlag(!flag);
    // cb();
    res()

 }).catch(err=>{
     console.log(err);
     rej();
 })

})
    

}


  const addEmployee=(data,cb)=>{
    // We will call the api 
    // next we will see how to pass headers as well
return new Promise((res,rej)=>{
  const headers = {
    token:localStorage.getItem("token")
  };
  axios.post(`${URL}/add/${indexName}`,data,{headers:headers}).then(response=>{
    // console.log(response.data);
     setFlag(!flag);
    // cb();
    res()

 }).catch(err=>{
     console.log(err);
     rej();
 })

})
    

}

const logout=()=>{

  localStorage.removeItem("token");
  navigate("/login");
// test 
//test

}
 
  return (
    <div>
      <Row>
      <Col span={12}>
        <Button  danger onClick={logout} >
          Logout
        </Button>

     <Add addEmployee={addEmployee} deleteData={deleteData}/>


      </Col>
      <Col span={12}>


      <MyTable data={state} deleteData={deleteData}  editEmployee={editEmployee}/>

{
  showModal? <Model/>:""

}

{
  /**
   *  <button onClick={handleModal}>
        Open Modal
      </button>
   */
}
     
      </Col>
    </Row>




    </div>
  )
}

export default Crud