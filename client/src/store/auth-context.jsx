import React, { useState } from 'react';
const AuthContext = React.createContext({
  token: Boolean,
  isLoggedIn: false,
  login: (token) => { }
})

export const AuthContextProvide = (props) => {
  const [token, setToken] = useState(null)

  const userIsLoggedIn = !!token; //convert to boolean
  console.log(userIsLoggedIn);

  const loginHandler = (token) => {
    console.log(token);
    setToken(token);
  };


  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
  };
  console.log(contextValue.isLoggedIn);
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext