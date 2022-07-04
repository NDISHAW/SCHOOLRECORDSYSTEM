import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import MTStudet from './school/MTStudet';
import Navbar from "./Navbar";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ width: "400px", display: "flex" }}>
        <div>
          <div className="p-4 box mt-1 text-center text-white ">
            Hello Welcome :: = -:-{user && user.email}
          </div>
          <div className="d-grid ">
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>
      </div>
      <div>
        <MTStudet />
      </div>
    </>
  );
};

export default Home;
