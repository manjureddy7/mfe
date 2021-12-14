import React from 'react';
import { loginSuccess, loginFailed } from './auth.slice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const Token = () => {
    const { token, error } = useSelector(store => store.auth);
    const dispatch = useDispatch();

    return (
        <div>
            <Typography
                variant="h5"
                color="inherit"
                noWrap
            >
                Token Page
            </Typography>
            <Typography
                variant="h6"
                color="inherit"
                noWrap
            >
                This page has Redux toolkit in place
            </Typography>
            <Button
                color="primary"
                variant="outlined"
                component={Button}
                onClick={() => dispatch(loginSuccess({ token: `token-${Math.random()}`}))}
            >
                Act Login success
           </Button>
           <Button
                color="secondary"
                variant="outlined"
                component={Button}
                onClick={() => dispatch(loginFailed({ error: `error-${Math.random()}`}))}
            >
                Act Login Failure
           </Button>
            <br />
            { token && <span>Token: {token}</span> } <br />
            { error && <span>Error: {error}</span> }
        </div>
    )
}

export default Token;