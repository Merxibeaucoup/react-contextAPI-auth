import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Get from "./pages/Get";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { AuthContext } from "./context/auth/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/get" element={<Get />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
