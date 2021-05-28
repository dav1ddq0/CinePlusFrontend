import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useHistory } from 'react-router-dom'

const UserProfileMenu = (props) => {
    const history = useHistory();

    return (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={props.menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={props.isMenuOpen}
            onClose={props.closeProfileMenu}
        >
            <MenuItem
                onClick={() => { props.closeProfileMenu(); history.push('./signin') }}>
                Login
            </MenuItem>
            <MenuItem onClick={() => { props.closeProfileMenu(); history.push('/myaccount'); }}>
                My account
            </MenuItem>
            <MenuItem
                onClick={() => { props.closeProfileMenu(); props.setLogged(false); }}>
                Logout
            </MenuItem>
        </Menu>
    );
}


export default UserProfileMenu;