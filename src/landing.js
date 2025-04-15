import { Link, Outlet } from "react-router-dom";
import { Button } from "@chatscope/chat-ui-kit-react";
import './App.css';

function Landing(){
    return(
   <div className="landing-page">
        <h1>Welcome to Medistory</h1>
        <Link to="/App">
        <Button className="landing-button">Chat Page</Button>
        </Link>
    </div>
    )
}



export default Landing;