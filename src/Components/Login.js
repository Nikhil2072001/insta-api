import React, { useState } from 'react'
import axios from 'axios';
const Login = ({setUid}) => {
    const [data,setData] = useState({email:"",password:""});
    let {email,password} = data;

    function handleClick(e){
        
        setData({...data, [e.target.name]:e.target.value});

    }
  
  async  function handleSubmit(e){
    e.preventDefault();
    if(!email || !password){
        alert("Please fill all fields");
        return
    }else{
        const userData = {
            email: data.email,
            password: data.password
          };
          console.log(userData);
        try {
            const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login",userData)
            console.log(response.data);
            setUid(response.data.data._id);
            console.log(response.data.data._id)
            setData({email:"",password:""})
            alert("user registered successfully")
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
     
    }
  return (
    
    <div > 
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{ margin:"20px",display:"flex", flexFlow:"column" , width:"200px",gap:"10px"}}>
        <input placeholder='Enter your email' type="email" name='email' value={email} onChange={handleClick} />
        <input placeholder='Enter your password' type="password" name='password' value={password} onChange={handleClick} />
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login