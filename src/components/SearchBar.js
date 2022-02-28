import React from "react";
import '../App.css'
import { Card,Button, FormControl, Form } from "react-bootstrap";

function SearchBar() {
  return (
    <div className="bckgrd-image">
      <Form className="d-flex">
        <FormControl
          type="text"
          name= "search"
          placeholder="Search Github Users"
          className="me-2"
           
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}

export default SearchBar;
