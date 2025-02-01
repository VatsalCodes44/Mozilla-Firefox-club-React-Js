import { useState, useMemo, memo, useCallback, useRef } from "react";
import Mozilla from "./components/Mozilla/Mozilla";
import NavBar from "./components/Navbar/NavBar";
import React from 'react';
import { Outlet } from "react-router-dom";


function App(){
  return (
    <div className="bg-black " style={{width: "100vw", height: "100vh"}}>
      <NavBar />
      <Mozilla />
      <Outlet />
    </div>
  )
}
export default App;

