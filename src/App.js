import React, {useState, useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
// import AllUsers from './components/AllUsers';
import SearchBar from "./components/SearchBar";
import User from "./components/User";
import Paginition from "./components/Paginition";
// import User from './components/User';
import axios from 'axios';

function App() {
  let githubUsers = [];
 
  const [users, setUsers] = useState(githubUsers);
  // const [users, setUsers] = useState([
  //   {
  //     username:"a dammyimage",
  //    type: "user ",
  //     score: 1,
  //     isCompleted: false,
  //   },
  //   {
  //     username:"a dammyimage",
  //    type: "student ",
  //    score: 3,
  //     isCompleted: false,
  //   },
  //   {
  //     username:"a dammyimage",
  //    type: "prefect ",
  //    score:2,
  //     isCompleted: false,
  //   },
    
  // ]);

  useEffect(() => { 
    axios
      
      .get("https://api.github.com/search/users?q=lagos&page=1")
      .then((res) => {
        console.log(res);
        setUsers(res.data.items );
      }) 
      .catch((error) => console.log(error))
     
  }, [])

  const [names, setNames] =useState(githubUsers)
  const filterNames = e => {
    const search = e.target.value.toLowerCase()
    const filteredNames = githubUsers.filter(names => names.type.toLowerCase().includes(search))
    setNames(filteredNames)
  }
  
  return (
    <Container fluid className = 'justify-content-center app' >
      <div className="search">
      <Row>
        <Col xs={12} md={12} >
          <SearchBar  filterNames ={filterNames} />
          
        </Col>
        <br/>
        <Col >
          <User user ={users} />
         
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
