import "./App.css";
import Home from "./Home";
import Login from "./auth/Logini"
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/DisplayUsers" element={<DisplayUsers />} /> */}
      </Routes>
    </>
  );
}

export default App;
