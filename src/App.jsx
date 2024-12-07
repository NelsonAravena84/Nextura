import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
