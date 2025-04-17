import { Link, Outlet } from "react-router-dom";
import { Button } from "@chatscope/chat-ui-kit-react";
import './App.css';

function Landing(){
    return(
    <div>
        <div className="landing-page">
            <h1 color="white">Welcome to Medistory</h1>
        </div>
        <div>
            <Link to="/App">
            <Button className="landing-button">Chat Page</Button>
            </Link>
            <Link to="/noteGen">
            <Button className="landing-button">Generate Note</Button>
            </Link>
        </div>
    </div> 
    )
}



export default Landing;