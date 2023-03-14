import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
            <Route exact path="/" component={Home} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
