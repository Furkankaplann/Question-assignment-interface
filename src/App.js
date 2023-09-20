// App.js

import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Assignments from "./pages/assignments/Assignments";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { Grid } from "@mui/material";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Grid container>
          {isLoggedIn && (
            <Grid item xs={2}>
              <Sidebar handleLogout={handleLogout} />
            </Grid>
          )}
          <Grid item xs={10}>
            {isLoggedIn && (
              <Grid item xs={12}>
                <Navbar />
              </Grid>
            )}
            <Grid item xs={12}>
              {!isLoggedIn ? (
                <Routes>
                  <Route path="/" element={<Login onLogin={handleLogin} />} />
                </Routes>
              ) : (
                // If the user is logged in, render the main content
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="users">
                    <Route index element={<List />} />
                    <Route path=":userId" element={<Single />} />
                    <Route
                      path="new"
                      element={
                        <New inputs={userInputs} title="Kullanıcı Ekle" />
                      }
                    />
                  </Route>
                  <Route path="products">
                    <Route index element={<List />} />
                    <Route path=":productId" element={<Single />} />
                    <Route
                      path="new"
                      element={
                        <New inputs={productInputs} title="Add New Product" />
                      }
                    />
                  </Route>
                  <Route path="Assignments" element={<Assignments />} />
                </Routes>
              )}
            </Grid>
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
