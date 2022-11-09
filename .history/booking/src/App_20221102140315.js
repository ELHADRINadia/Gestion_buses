import "./App.css";
import dashboard from "./Admin/dashboard";
// import dashboard from "./Admin/dashboard";

import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import DisplayUsers from "./components/Users/DisplayUsers";

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
