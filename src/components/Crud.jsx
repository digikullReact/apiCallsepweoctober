import {MyTable} from './Table';
import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Col, Row } from 'antd';
import Add from './Add';


const Crud = () => {
  const URL="http://rustycoder.live:8080";
  const indexName="employee";
  const [state,setState]=useState([]);
  const [flag,setFlag]=useState(false);

  const modifyData=(arr)=>{
    return arr.map(ele=>{
      return ele._source
    })

  }


  const getData=async()=>{
    try {
      let response=await axios.get(`${URL}/get/${indexName}`);
      console.log(response.data)
      setState(modifyData(response.data));

    } catch (error) {
      console.log(error);
    }

  }


  const addEmployee=(data,cb)=>{
    // We will call the api 
    // next we will see how to pass headers as well
return new Promise((res,rej)=>{
  axios.post(`${URL}/add/${indexName}`,data).then(response=>{
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

  useEffect(()=>{
    getData(indexName)

  },[flag])
  return (
    <div>
      <Row>
      <Col span={12}>

     <Add addEmployee={addEmployee}/>


      </Col>
      <Col span={12}>


      <MyTable data={state} />
      </Col>
    </Row>




    </div>
  )
}

export default Crud