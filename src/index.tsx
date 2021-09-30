import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.scss';
import backendSettings from "./module/settings/backend";

const settings :backendSettings = {
    tokenKey: process.env.REACT_APP_TOKEN_KEY ? `${process.env.REACT_APP_TOKEN_KEY}` : 'local_token',
    cookieKey: process.env.REACT_APP_COOKIE_KEY ? `${process.env.REACT_APP_COOKIE_KEY}` : 'local[session_key]',
    publicKey: process.env.REACT_APP_PUBLIC_KEY ? `${process.env.REACT_APP_PUBLIC_KEY}` : '',
    api: {
        basePath: process.env.REACT_APP_API_PATH ? `${process.env.REACT_APP_API_PATH}` : 'http://localhost:3000/',
        domain: process.env.REACT_APP_CURRENT_DOMAIN ? `${process.env.REACT_APP_CURRENT_DOMAIN}` : 'localhost'
    },
}

ReactDOM.render(
    <React.StrictMode>
        <App {...settings} />
    </React.StrictMode>,
    document.getElementById('root')
);