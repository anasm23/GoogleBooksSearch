import React from "react";


function Form(props){
return (
  <div className="container">
  <form>
    <div>
      <label htmlFor="search"><h1>Please enter a book title:</h1></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="🤔"
        id="search"
      />
      <button onClick={props.handleFormSubmit}>
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;