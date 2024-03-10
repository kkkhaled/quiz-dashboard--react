import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLoginStatus } from "../store/auth/authSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(toggleLoginStatus());
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Button variant="contained" component={Link} to="/" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Home;
