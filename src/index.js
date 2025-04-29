import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SearchBar from './searchBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchBar />);