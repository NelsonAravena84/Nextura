import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CrearCuenta from "./pages/CrearCuenta";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/CrearCuenta" element={<CrearCuenta/>}/>
      </Routes>
    </div>
  );
}

export default App;
