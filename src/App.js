import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registration from './components/Registration';
import ShowRecords from './components/ShowRecords';
import './App.css'; // Main CSS file

const App = () => {
    return (
        <Router>
            <div className="landing-page">
                <h1>Welcome to User Registration</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/register">Registration</Link>
                    <Link to="/show-records">Show Records</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<div className="home"><h2>Landing Page</h2><p>Select an option above to navigate.</p></div>} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/show-records" element={<ShowRecords />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
