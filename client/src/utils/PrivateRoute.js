import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (token) {
                    return <Component {...props} />
                } else {
                    <Redirect to={{
                        pathname: "/dashboard",
                        state: {
                            from: props.location0
                        }
                    }}
                    />
                }
            }}

        />
    )
}