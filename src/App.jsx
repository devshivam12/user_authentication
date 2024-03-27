import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from "./components/Profile"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
