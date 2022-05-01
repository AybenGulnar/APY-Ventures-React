import UserList from "./Components/UserList";
import React, {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false); 
  useEffect (
    () => {
      setLoading(true)
      setTimeout(
        () => {
          setLoading(false)
        }, 1000)
        
      }, []);
 
  return (
    <div classname= "App" >
      {
        loading ? (<ClipLoader color= {"#36D7B7"} loading={loading}  size={30} />)
        :  ( <UserList /> )  
      }
    
    </div>
  );
}

export default App;