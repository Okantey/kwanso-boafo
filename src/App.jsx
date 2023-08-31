import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<Navbar />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
