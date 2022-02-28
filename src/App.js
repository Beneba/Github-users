import React, {useState, useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
// import AllUsers from './components/AllUsers';
import SearchBar from "./components/SearchBar";
import Users from "./components/Users";
import Paginition from "./components/Paginition";
// import User from './components/User';
import axios from 'axios';

function App() {
  
  return (
    <Container fluid className = 'justify-content-center app' >
      <div className="search">
      <Row>
        <Col xs={12} md={12} >
          <SearchBar />
          
        </Col>
        <br/>
        <Col >
          <Users />
         
        </Col>
        <Col xs = {12} md = {12}>
          
          <Paginition />
        </Col>
        
      </Row>
      </div>
    </Container>
  );
}

export default App;
