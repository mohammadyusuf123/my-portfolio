
import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { useState } from 'react';
const auth=getAuth(app)
function App() {
  const [user,setUser]=useState({})
  const googleProvider= new GoogleAuthProvider(); 
  const gitHubProvider=new GithubAuthProvider()
  const handleGitHub=()=>{
    signInWithPopup(auth,gitHubProvider)
    .then(result=>{
      const user=result.user
      setUser(user)
      console.log(user)
    })
    .catch((error) => {
    console.log(error)
   });
  }
  const handleGoogleSineIn=()=>{
   signInWithPopup(auth,googleProvider)
   .then(result=>{
     const user=result.user
     setUser(user)
     console.log(user)
   })
   .catch((error) => {
   console.log(error)
  });

  }
  const handleSineOut=()=>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(error=>{
      setUser({})
    })
  }
  return (
    <div>
     {user.email? <button onClick={handleSineOut}>Google sine Out</button>: <>
     <button onClick={handleGoogleSineIn}>Google sine In</button>
     <button onClick={handleGitHub}>GitHUb sine In</button></>
       
       
     }

      {
        <h1>Name:{user.displayName}</h1>
      }
    </div>
  );
}

export default App;
