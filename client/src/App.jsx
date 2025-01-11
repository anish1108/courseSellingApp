import Navbar from "./components/navbar/Navbar"
import Signin from "./components/signin/Signin"
import Signup from "./components/signup/signup"
import Home from "./components/home/Home"
import {  Routes, Route, useNavigate } from "react-router-dom"
import Createform from "./components/createform/Createform"
import { useEffect, useState } from "react"

function App() {

  const [signedin, setSignedin] = useState(false);
  const [roleu, setRoleu] = useState("user");

    const navigate = useNavigate()
    // useEffect(() => {
    //   navigate("/")  // there is a problem with this when i am searching for specific route from searchbar it is navigating at "/"  NEED TO FIX THIS 
    // }, [navigate])

    useEffect(() => {
      if (performance.getEntriesByType("navigation")[0].type === "reload") {
        navigate("/");
      }
    }, [navigate]);


    useEffect(()=>{
      const token = localStorage.getItem("token");
      if(token){
        setSignedin(true)
      }
    },[setSignedin])

  return (
    <>
    <div className="bg-slate-200 h-screen">
        <Routes>
          <Route path="/" element={<Navbar signedin={signedin} setSignedin={setSignedin} roleu={roleu} setRoleu={setRoleu} />}>
            <Route index element={<Home />} />
            <Route path="create-course" element={<Createform />} />
            <Route path="signin" element={<Signin setSignedin={setSignedin} setRoleu={setRoleu}/>} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
        </div>
    </>
  )
}

export default App
