import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Paginition({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div className="pageItem">
        <nav>
            <ul className = "pagination">
                {
                    pageNumbers.map((number) => (
                        <li key = {number} className = "page-item">
                        <a onClick={()=> paginate(number)} href ="#" className="page-link">
                            {number}
                        </a>
                    </li>
                    ))
                };
            </ul>
        </nav>
     </div>
  );
}

export default Paginition;
