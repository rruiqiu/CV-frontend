import React from "react"
import Header from "./Header"
import { Route, Routes } from "react-router-dom"
import About from "../pages/about"
import Userdata from "../Data/Userdata"
import Login from "../Data/login"
function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdata" element={
          <Userdata />
        } />
      </Routes>


    </div>
  )
}
export default App