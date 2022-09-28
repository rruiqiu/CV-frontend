import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';
function Userdata () {
  const authCtx = useContext(AuthContext)
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    axios.get('https://ps-portfolio-backend.herokuapp.com/userdata')
      .then(res => setUserdata(res.data));
  }, []);

  function HandleChange () {
    axios.delete('https://ps-portfolio-backend.herokuapp.com/userdata')
      .then(res => {
        console.log(res);
      });
    setUserdata([])
  }

  function handleDelete (id) {
    axios.delete("https://ps-portfolio-backend.herokuapp.com/userdata/" + id)
      .then(res => {
        console.log("Deleted");
        console.log(res.data);
        alert(res.data)
        const result = userdata.filter(userdata => userdata._id !== id)
        console.log(result);
        setUserdata(result)
      })
      .catch(err => console.log(err))

  }
  const HandleLogout = () => {
    authCtx.logout()
  }
  return (
    <section >
      <button onClick={HandleChange} type="submit">Delete All data</button>
      <br />
      <button onClick={HandleLogout} type="submit"> Logout</button>
      <h2 style={{ textAlign: "center" }}>UserData page</h2>
      {userdata.map(items => <div key={items._id}>
        <div id="userdata_page">
          <li>Name: {items.name}</li>
          <li>Email: {items.email} </li>
          <li>Message: {items.message} </li>
          <div><button className='userdatabuttondeleteone' type="submit" onClick={() => handleDelete(items._id)}>Delete</button> </div> <br />
        </div>
      </div>)}
    </section>
  )
}

export default Userdata