import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => {
  return (
    <form className="search" onChange={props.handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search for a User by Name."
          id="employee"
        />
        <label htmlFor="sort">Sort:</label>
        <select
          className="form-control"
          name="sort"
          id="sort"
          onChange={() =>
            props.handleSort(document.querySelector("#sort").value)
          }
        >
          <option value="First Name">First Name A-Z</option>
          <option value="Last Name">Last Name A-Z</option>
          <option value="Age">Age</option>
          <option value="Email">Email</option>
        </select>
        <datalist id="employees">
          {props.employees.map(employee => (
            <option
              value={`${employee.name.first} ${employee.name.last}`}
              key={employee.login.uuid}
            />
          ))}
        </datalist>
      </div>
    </form>
  );
};

export default SearchForm;
