import React, { Component } from 'react';
import { IconButton} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

const userProfile = (props) => (
    <IconButton
        aria-label="account of current user"
        aria-controls={props.menuId}
        aria-haspopup="true"
        onClick={props.clicked}
        color="inherit"
    >
        {props.isLogged ? <AccountCircle /> : <LockIcon />}
    </IconButton>
);

export default userProfile;