import { Link, Outlet } from "react-router-dom";
import { Button } from "@chatscope/chat-ui-kit-react";
import './styles.css';

function Landing(){
    return(
        <>
        <nav className="nav">
        <Link to="/" className="site-title">Medistory</Link>
        <ul>
            <li >
                <Link to="/App">Chat Page</Link>
            </li>
            <li>
                <Link to="/NoteGen">Note Generator</Link>
            </li>
        </ul>
    </nav>
    <h1>Welcome, John Doe</h1>
    </>
    )
}



export default Landing;