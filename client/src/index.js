import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import App from "./components/App"
import { AuthContextProvide } from "./store/auth-context"


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <AuthContextProvide>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvide>
)

