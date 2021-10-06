import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Login from './Login'
import Error from './Error'
import './css/index.scss'
import backendSettings from "./module/settings/backend"

import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import RoutePrivate from './module/RoutePrivate'
import configureStore, { history } from './redux/storeConfig'

const store = configureStore({})

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
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Route exact path="/login">
                        <React.StrictMode>
                            <Login {...settings} />
                        </React.StrictMode>
                    </Route>
                    <RoutePrivate exact path="/">
                        <React.StrictMode>
                            <App {...settings} />
                        </React.StrictMode>
                    </RoutePrivate>
                    <Route component={Error} />
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);