import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Landing from './landing';
import NoteGen from './noteGen';

const Routing = () => {
    return(
      <Router>
          <Routes>
              <Route path="/" element={<Landing />}/>
              <Route path="/App" element = {<App />}/>
              <Route path="/noteGen" element = {<NoteGen />}/>
          </Routes>
      </Router>
    )
}
export default Routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);
