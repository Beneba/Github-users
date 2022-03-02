import React from "react";
import '../App.css'
import { Card,Button, FormControl, Form } from "react-bootstrap";

function SearchBar({filterNames}) {
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
        
      </Form>
    </div>
  );
}

export default SearchBar;
