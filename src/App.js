import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/index";
import API from "./utils/API";

const App = () => {
  // const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   try {
  //     API.getEmployees(25).then(res => {
  //       setEmployees([...res.data.results]);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default App;
