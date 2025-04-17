import { Link, Outlet } from "react-router-dom";
import { Button } from "@chatscope/chat-ui-kit-react";
import { IconBase } from "react-icons";
import './styles.css'

function NoteGen(){
    return(
    <>
        <nav className="nav">
        <Link to="/" className="site-title">Medistory: Note Generator</Link>
            <ul>
                <li >
                    <Link to="/">Back</Link>
                </li>
            </ul>
        </nav>
        <main className="main">
            <h1>Insert Audio or Text File Here</h1>
            <Button>Click Here to Insert File</Button>
        </main>
    </>
    )
}



export default NoteGen;