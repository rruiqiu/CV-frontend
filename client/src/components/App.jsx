import Header from "./Header"
import { Navigate, Route, Routes } from "react-router-dom"
import About from "../pages/about"
import Userdata from "../Data/Userdata"
import Login from "../Data/login"
import AuthContext from "../store/auth-context"
import { useContext } from "react"
import Demo from "./DemoAEV"

function App () {
  const authCtx = useContext(AuthContext)
  console.log(authCtx.isLoggedIn);
  return (

    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        {!authCtx.isLoggedIn && (<Route path="/userdata" element={<Login />} />)}
        <Route path="/login" element={authCtx.isLoggedIn ? <Navigate to="/userdata" /> : <Login />} />
        <Route path="/userdata" element={authCtx.isLoggedIn ? <Userdata /> : <Navigate to="/login" />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        } />
        <Route path="/AEVdemo" element={<Demo />} />
      </Routes>
    </div>
  )
}
export default App