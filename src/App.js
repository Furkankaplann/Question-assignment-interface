// App.js

import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Home from "./pages/home/Home";
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
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <Grid item xs={12}>
              <Navbar />
            </Grid>
            <Grid item xs={12}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route
                    path="new"
                    element={<New inputs={userInputs} title="Kullanıcı Ekle" />}
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
            </Grid>
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
