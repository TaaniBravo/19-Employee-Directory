import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm/index";
import SearchResults from "../components/SearchResults/index";
import API from "../utils/API";

const Directory = () => {
  // const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      API.getEmployees(25).then(res => {
        setEmployees([...res.data.results]);
        setResults([...res.data.results]);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleInputChange = e => {
    setResults(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    try {
      const searchRes = employees.filter(employee =>
        `${employee.name.first} ${employee.name.last}`
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setResults([...searchRes]);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  return (
    <div>
      <Container style={{ minHeight: "80%" }}>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          employees={employees}
        />
        <SearchResults results={results} />
      </Container>
    </div>
  );
};

export default Directory;
