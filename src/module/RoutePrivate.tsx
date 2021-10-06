import * as React from "react"
import { Route, Redirect } from 'react-router'

function PrivateRoute({ children, ...rest } :{children: JSX.Element; [rest: string]: any;}): JSX.Element {
    return (
        <Route {...rest} render={() => {
            return <Redirect to='/login' />
        }} />
    )
}

export default PrivateRoute