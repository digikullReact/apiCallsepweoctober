import React, { useState } from 'react'

const Bill = () => {
    const [state,setState]=useState({
        customerName:"",
        billAmount:0,
        service:""
    })

    const [customers,setCustomers]=useState([]);

    const handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value})

    }

    const handleClick=()=>{
        setCustomers([...customers,state]);
        setState({
            customerName:"",
        billAmount:0,
        service:""
        })
    }
  return (
    <div>



<input type={"text"} placeholder="customer Name" name='customerName' value={state.customerName} onChange={handleChange}/>
<input type={"text"} placeholder="Bill Amount" name='billAmount' value={state.billAmount} onChange={handleChange}/>


<button onClick={handleClick}> 
    Add All customers
</button>

{
    customers.map((data,i)=>(
        <li key={i}>{data.customerName} {data.billAmount}</li>
    ))
}


    </div>
  )
}

export default Bill