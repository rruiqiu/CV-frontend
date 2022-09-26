import { useState } from "react"
function Login () {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  function handleChange (event) {
    setUsername(event.username)
    setPassword(event.password)
  }
  function handleClick () {
    if (username === "qiur12" && password === "731006") {
    }

  }
  return (
    <div>
      <form action="">
        <input type="text" name="username" onChange={handleChange} placeholder="username" />
        <input type="text" name="password" onChange={handleChange} placeholder="password" />
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default Login