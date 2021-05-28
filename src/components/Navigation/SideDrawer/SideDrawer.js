import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import classes from './SideDrawer.module.css';


const sideDrawer = (props) => {

    const attachedClasses = [classes.SideDrawer, props.opened ? classes.Open : classes.Close];
    
    return (
        <Aux>
            <Backdrop show={props.opened} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;