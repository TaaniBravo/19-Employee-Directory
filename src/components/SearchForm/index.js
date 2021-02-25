import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => {
  console.log(props.employees);
  return (
    <form className="search">
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
        <datalist id="employees">
          {props.employees.map(employee => (
            <option
              value={`${employee.name.first} ${employee.name.last}`}
              key={employee.login.uuid}
            />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
