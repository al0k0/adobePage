import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
function App() {


  return (
    <div className="app">
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="profile" element={<Profile/>}/>
    </Routes>
    </div>
  )
}

export default App
