import "./App.css";
import Home from "./Home";
import Login from "./auth/Login"
import Register from "./auth/Register"
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Login />} />
        {/* <Route path="/DisplayUsers" element={<DisplayUsers />} /> */}
      </Routes>
    </>
  );
}

export default App;
