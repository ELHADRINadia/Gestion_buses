import "./App.css";
import Home from "./Home";
import Login from "./auth/Login"
import Register from "./auth/Register"
import Dashboard from "./Admin/dashboard";
import DisplayBooking from "./Admin/booking/DisplayBooking";
import DisplayUsers from "./Admin/users/DisplayUsers";
import DisplayBuses from "./Admin/bus/DisplayBuses";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
    
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/displayBooking" element={<DisplayBooking />} />
        <Route path="/displayUsers" element={<DisplayUsers />} />
        <Route path="/displayBuses" element={<DisplayBuses />} />
      </Routes>
    </>
  );
}

export default App;
