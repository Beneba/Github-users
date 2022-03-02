import React, {useState, useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import User from "./components/User";
import Paginition from "./components/Paginition";
import axios from 'axios';

function App() {
  let githubUsers = [];
  const [users, setUsers] = useState(githubUsers);
  const [loading , setLoading] =useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);
 
  useEffect(() => { 
      setLoading(true);
       axios .get("https://api.github.com/search/users?q=lagos&page=1")
      .then((res) => { 
        console.log(res);
        setUsers(res.data.items );
        setLoading(false);  
      }) 
      .catch((error) => console.log(error))
     
  }, [])


  //Get current Users
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  // search filter
  const filterNames = e => {
    const search = e.target.value.toLowerCase()
    const filteredNames = users.filter(users => users.login.toLowerCase().includes(search))
    setUsers(filteredNames)
  }
  
  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container fluid className = 'justify-content-center app' >
      <div className="search">
      <Row>
        <Col xs={12} md={12} >
          <SearchBar  filterNames ={filterNames} />
        </Col>
        
        <Col  xs={12} md={12}> 
          <User   user={currentPosts} loading ={loading} />
        </Col>
        
        <Col xs = {12} md = {12}>
          <Paginition postsPerPage ={postsPerPage} totalPosts ={users.length} paginate ={paginate}  />
        </Col>
        
      </Row>
      </div>
    </Container>
  );
}

export default App;
