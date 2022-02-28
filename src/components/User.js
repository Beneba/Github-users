import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, CardGroup } from "react-bootstrap";
import profileIcon from "../img/profileIcon.jpg";

function User({userInfo}) {
    // userInfo/
  return (
    <div className="Item">
      <div className="grid-container">
       
         

        <Row xs={1} md={3} className="g-4">
 
            <Col>
          <Card className="card-effect">
            <img src={profileIcon}  className="center"/>
              <p> <b>Username</b></p>
              <Card.Text className="card-changes">
                <p>Type: </p>
                <p>Score: </p>
              </Card.Text>
          </Card>
          <Card className="card-effect">
            <img src={profileIcon}  className="center"/>
              <p> <b>Username</b></p>
              <Card.Text className="card-changes">
                <p>Type: </p>
                <p>Score: </p>
              </Card.Text>
          </Card>
          <Card className="card-effect">
            <img src={profileIcon}  className="center"/>
              <p> <b>Username</b></p>
              <Card.Text className="card-changes">
                <p>Type: </p>
                <p>Score: </p>
              </Card.Text>
          </Card>
         
          </Col> 
       
         
         
         
          
          
          
        </Row>
      </div>
    </div>
  );
}

export default User;
