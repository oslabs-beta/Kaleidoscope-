import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // 
    const handleAWSLogin = () => {
        if (username && password) {
            alert(`Logged in as ${username}`);
        } else {
            alert('Please provide the correct credentials');
        }
    };

    const handleViewLogin = () => {
    
    };

    return (
        <div className="flex flex-col items-center h-screen justify-center bg-gray-100">
            <h1 className="text-4x1 font-semibold mb-8">Kaleidoscope</h1>
            <div>
                <label htmlFor="username">AWS Access Key ID:</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">AWS Secret Access Key:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div>
                <label htmlFor="password">Cluster Name:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Region:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleAWSLogin}>AWS Login</button>
                <Link to="/viewlogin">
                    <button>View Your Local Cluster</button>
                </Link>
        </div>
    );
};

export default Home;
