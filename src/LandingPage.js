import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './styles.css';



function Landing(){
  return(
      <>
      <nav className="nav">
      <Link to="/" className="site-title">Medistory</Link>
      <ul>
          <li >
              <Link to="/SearchBar">Search Patient</Link>
          </li>
          <li>
              <Link to="/Upload">File Upload</Link>
          </li>
      </ul>
  </nav>
  <h1>Welcome, John Doe</h1>
  </>
  )
}



export default Landing;