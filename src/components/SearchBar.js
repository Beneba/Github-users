import React from "react";
import '../App.css'
import {Button, FormControl, Form } from "react-bootstrap";

function SearchBar({filterNames, names}) {
  return (
    <div className="bckgrd-image">
      <Form className="d-flex">
        <FormControl
          type="search"
          name= "search"
          placeholder="Search Github Users"
          className="me-2"
           onChange = {(e) => filterNames(e)}
        />
        <Button variant="outline-primary">Search</Button>
        {/* {
          names.map (name => {
            return <li key ={names.id}> {names.login}</li>
          })
        } */}
        
      </Form>
    </div>
  );
}

export default SearchBar;
