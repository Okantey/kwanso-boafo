import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
