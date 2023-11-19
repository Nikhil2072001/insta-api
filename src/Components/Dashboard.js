import React,{useState} from 'react'
import axios from 'axios';
const Dashboard = ({uid}) => {
    const[joke, setJoke] = useState("");
    function handleClick(){
      axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
        headers:{
        Authorization: `Bearer ${uid}`
        }
     })
     .then((res)=> setJoke(res.data.data.message))
     .catch(err=> console.log(err.response.data.message));
    }
  return (
    <div>
        <h1>
            DashBoard
        </h1>
        <button onClick={handleClick}>Get Joke</button>
    </div>
  )
}

export default Dashboard