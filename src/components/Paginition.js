import React from "react";
import "../App.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

function Paginition() {
  return (
    <div className="pageItem">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button variant="success">Prev</Button>{" "}
          
          <Button variant="success">Next</Button>{" "}
        
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default Paginition;
