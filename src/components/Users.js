import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row } from "react-bootstrap";
import User from './User';

import axios from "axios";

function Users() {
  // let githubUsers = [];
 
  // const [users, setUsers] = useState(githubUsers);
  const [users, setUsers] = useState([
    {
      username:"a dammyimage",
     type: "user ",
      score: 1,
      isCompleted: false,
    },
    {
      username:"a dammyimage",
     type: "student ",
     score: 3,
      isCompleted: false,
    },
    {
      username:"a dammyimage",
     type: "prefect ",
     score:2,
      isCompleted: false,
    },
    
  ]);

  // useEffect(() => { 
  //   axios
      
  //     .get("https://api.github.com/search/users?q=lagos&page=1")
  //     .then((res) => {
  //       console.log(res);
  //       setUsers(res.data.items );
  //     }) 
  //     .catch((error) => console.log(error))
     
  // }, [])

  return (
    
      
      <Row>
     
      {/* {users.map((users, index) => (                                            
          <User key={index} index={index} user={users} />
        ))}   */}
        <User />
      </Row>
  );
  }


export default Users;
