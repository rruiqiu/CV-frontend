import Axios from "axios"
import { useState } from "react"
import AuthContext from "../store/auth-context"
import { useContext } from "react"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const authCtx = useContext(AuthContext)

  function handleChange (event) {
    setUsername(event.target.value)
  }

  function handleChange2 (event) {
    setPassword(event.target.value)
  }



  const handleClick = (event) => {
    event.preventDefault();
    console.log(username, password);
    Axios.post("https://ps-portfolio-backend.herokuapp.com/login", {
      name: username,
      password: password
    })
      .then(function (res) {
        console.log(res.data);
        if (res.data.status) {
          authCtx.login(true)
          // console.log(authCtx.isLoggedIn)
        } else {
          // console.log(authCtx.isLoggedIn)
        }
        alert(res.data.message)
        // console.log(loginUser);
      })
      .catch(err => console.log(err))
    // alert("Your information has been submitted")
    // setPassword("")
    // setUsername("")
  }

  // if (loginUser && loginUser._id) {
  //   console.log("login");
  // } else {
  //   console.log("nothing");
  // }

  return (
    <div>
      <h3>Database Login System</h3>
      <form action="">
        <input type="text" name="username" onChange={handleChange} value={username} placeholder="username" />
        <input type="text" name="password" onChange={handleChange2} value={password} placeholder="password" />
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default Login