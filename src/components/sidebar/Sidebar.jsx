import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { DarkModeContext } from "../../context/darkModeContext";
import "./sidebar.scss";

const Sidebar = (props) => {
  const { darkMode } = useContext(DarkModeContext);
  const isLoggedIn = true;
  return (
    <div className={darkMode ? "sidebar dark" : "sidebar"}>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img
              src="https://www.okulistik.com/anasayfa/images/okulistik-logo.svg"
              alt=""
              className="okulistikLogo"
            />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <br />
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardIcon className="icon" />
              <span>Gösterge Paneli</span>
            </Link>
          </li>
          <p className="title">Listeler</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Değerlendiriciler</span>
            </li>
          </Link>

          <Link to="/Assignments" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Atamalar / Emirler</span>
            </li>
          </Link>

          <p className="title">Çıkış</p>

          <Link
            onClick={props.handleLogout}
            to="/"
            style={{ textDecoration: "none" }}
          >
            <li>
              <ExitToAppIcon className="icon" />
              <span className="logout">Çıkış Yap</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
