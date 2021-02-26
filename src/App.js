import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/index";
// import API from "../utils/API";

const App = () => {
  const [employees, setEmployees] = useState([]);

  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default App;
