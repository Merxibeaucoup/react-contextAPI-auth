import React, { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";

const Home = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      Home
      <button onClick={handleLogout}>{user && "LOGOUT"}</button>
    </div>
  );
};

export default Home;
