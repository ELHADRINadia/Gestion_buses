import "./App.css";
import Travel from "./Admin/dashboard";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import DisplayUsers from "./components/Users/DisplayUsers";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Hom />} />
        {/* <Route path="/DisplayUsers" element={<DisplayUsers />} /> */}
      </Routes>
    </>
  );
}

export default App;
