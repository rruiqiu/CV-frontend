import React, { useCallback, useState } from 'react';
const AuthContext = React.createContext({
  token: Boolean,
  isLoggedIn: false,
  login: (token) => { },
  logout: () => { },
})

const retrieveLoginstatus = () => {
  const status = localStorage.getItem("isLoggedin")
  return {
    status: status
  }
}

export const AuthContextProvide = (props) => {
  const tokenData = retrieveLoginstatus();

  let initialstatus;
  if (tokenData) {
    initialstatus = tokenData.status
  }

  const [token, setToken] = useState(initialstatus)

  const userIsLoggedIn = !!token; //convert to boolean


  // const logoutHandler = () => {
  //   setToken(null);
  //   localStorage.removeItem('isLoggedin');
  // };


  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('isLoggedin');
  }, []);

  console.log(userIsLoggedIn);

  const loginHandler = (token) => {
    localStorage.setItem('isLoggedin', !!token)
    console.log(token);
    setToken(token);
  };


  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };
  console.log(contextValue.isLoggedIn);
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext