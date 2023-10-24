import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom'; // Import Switch, Link, and useHistory from react-router-dom
import logo from './librologo.png';
import './App.css';
import CreateAccount from './CreateAccount';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); // Initialize history for navigation

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleCreateAccount = () => {
        // Use history.push to navigate to the "Create Account" page
        history.push('/create-account');
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Welcome To LibroVault!</p>
                    <div className="login-content">
                        <input
                            type="text"
                            className="login-input"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <input
                            type="password"
                            className="login-input"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button className="login-button" onClick={handleLogin}>Login</button>
                        <button className="login-button" onClick={handleCreateAccount}>
                            Create Account
                        </button>
                    </div>
                </header>
                <Switch>
                    <Route path="/create-account" component={CreateAccount} />
                </Switch>
                <div className="App-body">
                    Information about the site goes here :)
                </div>
            </div>
        </Router>
    );
}

export default App;
