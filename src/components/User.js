import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import profileIcon from "../img/profileIcon.jpg";

function User({user, loading}) { 
    if (loading) {
        return <h2>Loading...</h2>; 
    }
    
  return (
    <div className="Item">
      <div className="grid-container">

        <Row xs={1} md={3} className="g-4">

            {user.map((users, index) => (  <Col>
                 <Card className="card-effect">
                 <img src={profileIcon}  className="center"/>
                 <p> <b>{users.login}</b></p>  
                 <Card.Text className="card-changes">
                     <p>Score: {users.score}</p>
                     <p>Type:{users.type} </p>
                     <p> {users.html_url}</p>
                 </Card.Text>
             </Card>                                          
            </Col>  
              ))}           
        </Row>
      </div>
    </div>
  );
}

export default User;
