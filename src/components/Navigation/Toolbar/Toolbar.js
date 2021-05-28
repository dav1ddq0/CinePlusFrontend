import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Drawertoggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import UserProfile from '../../UserProfile/UserProfile'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Drawertoggle clicked={props.drawerMenuClicked} />
            <div className={classes.Paragraph}>
                <p >Cine +</p>
            </div>

            <div className={classes.UserProfile}>
                <UserProfile 
                isLogged={props.loggedIn}
                clicked={props.userProfileClicked} 
                menuId={props.profileMenuId}/>

            </div>
            <div className={classes.Logo}>
                <Logo />
            </div>

            {/* <nav>
            <NavigationItems />
        </nav> */}
        </header>
    );

}
export default toolbar;