import React, {useState, Component, useEffect} from 'react';
import './styles.css';
import { Search } from '@chatscope/chat-ui-kit-react';
import { useNavigate } from 'react-router-dom';

const patients = [
    {name: "John Doe", id: "1174"},
    {name: "Michelle Wilkins", id: "2745"},
    {name: "Thomas Reacher", id: "27886"},
];



function SearchBar() {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    
    const getPatient = () => {
        if(!value.trim()) return []; //if search is empty, return empty
        const lowerValue = value.toLowerCase();
        return patients.filter(patient =>
            patient.name.toLowerCase().includes(value.toLowerCase()) ||
            patient.id.includes(lowerValue)
        );
    };

    const matches = getPatient(); //call it inside render

    const handleNavigate = () => {
        if (matches.length === 1){
            navigate('/ChatScreen');
        }
    }

    return (
        <div className="App">
            <h1>Patient Search</h1>
            <Search placeholder="Type Patient Name or ID"
                    value = {value}
                    onChange={(v) => setValue(v)}
            />
            <div style={{marginTop: '20px'}}>
                {matches.length === 1 && (
                    <button onClick={handleNavigate}>Find Patient</button>
                )}
                {matches.length > 1 && (
                    <div>
                        <p>Multiple matches found:</p>
                        <ul>
                            {matches.map((patient) => (
                                <li key={patient.id}>
                                    {patient.name} (ID: {patient.id})
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;

