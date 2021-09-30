import React from 'react';
import api from '../module/request/api';
import '../css/login.scss';

type params = {
    api :api
}

function AuthForm (p :params) {
    const signIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            login: { value: string };
            password: { value: string };
        };
        const login = target.login.value;
        const password = target.password.value;
        p?.api?.post( '/auth', {login, password})
    }

    return (
        <form className="login" onSubmit={signIn}>
            <input type="text" name="login" placeholder="Login"/>
            <input type="password" name="password" placeholder="Password"/>
            <button type="submit">Sign in</button>
        </form>
    )
}

export default AuthForm