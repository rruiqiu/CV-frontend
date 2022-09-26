import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Userdata () {
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

  function handleClick () {

  }

  return (
    <section >
      <button onClick={HandleChange} type="submit">Delete All data</button>
      <h2 style={{ textAlign: "center" }}>UserData page</h2>
      {userdata.map(items => <div key={items._id}>
        <div id="userdata_page">
          <li>Name: {items.name}</li>
          <li>Email: {items.email} </li>
          <li>Message: {items.message} </li>
          <div><button className='userdatabuttondeleteone' onClick={handleClick} type="submit">Delete</button> </div> <br />
        </div>
      </div>)}
    </section>
  )
}

export default Userdata