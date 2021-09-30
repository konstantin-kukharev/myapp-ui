import React from 'react';
// import api from './module/request/api';
import './css/login.scss';

// const basePath = `${process.env.REACT_APP_API_PATH}`
// const publicKey = `${process.env.REACT_APP_PUBLIC_KEY}`
// const currentDomain = `${process.env.REACT_APP_CURRENT_DOMAIN}` || 'localhost'

const App = () => {
    //const backend = new api(publicKey, currentDomain, basePath)

    return (
        <form className="login">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
        </form>
    )
}

export default App