import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  const [uid, setUid] = useState("");
  return (
    <div>
      <SignUp/>
      <hr></hr>
      <Login setUid={setUid}/>
      <hr></hr>
      {
        !!uid && (
          <Dashboard uid={uid}/>
        )
      }
      
    </div>
  );
}

export default App;
