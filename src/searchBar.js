import React, {useState, Component, useEffect} from 'react';
import './App.css';
import { Search } from '@chatscope/chat-ui-kit-react';
import Select from 'react-select/base';
import App from './App';

const patients = [
    {name: "John Doe", id: "1174"},
    {name: "Michelle Wilkins", id: "2745"},
    {name: "Thomas Reacher", id: "27886"},
];



function SearchBar() {
    const [value, setValue] = useState("");
    
    const getPatient = () => {
        if(!value.trim()) return []; //if search is empty, return empty

        const lowerValue = value.toLowerCase();

        return patients.filter(patient =>
            patient.name.toLowerCase().includes(value.toLowerCase()) ||
            patient.id.includes(lowerValue)
        );
    };

    const matches = getPatient(); //call it inside render


    return (
        <div className="App">
            <h1>SearchBar Example</h1>
            <Search placeholder="Find patient"
                    value = {value}
                    onChange={(v) => setValue(v)}
                     />
            <div style={{marginTop: '20px'}}>
                (matches.length === 1 && (
                    <button onClick={App}>go to Chat!</button>
                ))
            </div>
        </div>
    );
}

export default SearchBar;

