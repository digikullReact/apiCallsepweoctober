import React ,{useState}from 'react'
import { Input,Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const URL="http://rustycoder.live:8080";
    const navigate=useNavigate();

    const [state,setState]=useState({
        username:"",
        password:""
    })


    const loginMethod=()=>{
        axios.post(`${URL}/auth/login`,state).then(response=>{
            console.log(response.data);
            localStorage.setItem("token",response.data.token);

            // Dynamic routing --->
            navigate("/crud");

          
        
         }).catch(err=>{
            alert("Wrong username password")
             console.log(err);
         })
}

const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value});

}



  return (
    <div>
        Login

        <Input placeholder="Username"  onChange={handleChange} name='username' value={state.username}/>
        <Input placeholder="Password"  onChange={handleChange}  name='password' value={state.password} />
        <Button type="primary" onClick={loginMethod}>Login</Button>




    </div>
  )
}

export default Login