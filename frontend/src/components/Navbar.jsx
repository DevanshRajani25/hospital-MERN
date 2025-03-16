import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthinticated, setIsAuthanticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthanticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate()
  
  const gotoLogin = () => {
    navigateTo("/login")
  }

  return (
    <nav className="container">
      <div className="logo">Devansh</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"}>HOME</Link>
          <Link to={"/appointment"}>APPOINTMENTS</Link>
          <Link to={"/about"}>ABOUT US</Link>
        </div>
        {isAuthinticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="logoutBtn btn" onClick={gotoLogin}>
            LOGIN
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
