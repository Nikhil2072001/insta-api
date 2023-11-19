import React, { useState } from 'react'
import axios from 'axios';
const SignUp = () => {
    const [data,setData] = useState({name:"",email:"",password:"",confirmPassword:""});
    let {name,email,password,confirmPassword} = data;

    function handleClick(e){
        
        setData({...data, [e.target.name]:e.target.value});

    }
  
  async  function handleSubmit(e){
    e.preventDefault();
    if(!email || !password || !confirmPassword){
        alert("Please fill all fields");
        return
    }else if(password!==confirmPassword){
        alert("Password not matching")
    }else{
        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
            // Add other required parameters here
          };
          console.log(userData);
        try {
            const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",userData)
            console.log(response.data);
            setData({name:"",email:"",password:"",confirmPassword:""})
            alert("user registered successfully")
        } catch (error) {
            console.log(error)
        }
    }
     
    }
  return (
    
    <div > 
        <h1>SingUp</h1>
        <form onSubmit={handleSubmit} style={{ margin:"20px",display:"flex", flexFlow:"column" , width:"200px",gap:"10px"}}>
        <input placeholder='Enter your name' type="text" name='name' value={name} onChange={handleClick} />
        <input placeholder='Enter your email' type="email" name='email' value={email} onChange={handleClick} />
        <input placeholder='Enter your password' type="password" name='password' value={password} onChange={handleClick} />
        <input placeholder='confirm password' type="password" name='confirmPassword' value={confirmPassword} onChange={handleClick} />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SignUp