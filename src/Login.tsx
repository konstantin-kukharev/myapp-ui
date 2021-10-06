import React from 'react';
import api from './module/request/api';
import session from './module/auth/session';
import backendSettings from "./module/settings/backend";
import AuthForm from "./form/auth";

const Login = (apiSettings :backendSettings) => {
    const s :session = new session(apiSettings)
    const a :api = new api(apiSettings)
    const [authorized] = React.useState(s.isAuthorized());

    if (!authorized) {
        return (
            <AuthForm api={a}/>
        )
    }

    return <h1>authorized</h1>
}

export default Login