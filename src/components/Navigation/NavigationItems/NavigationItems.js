import React from 'react';

import classes from './NavigationItems.module.css';
import Navigationitem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <Navigationitem
            link='/'>
            Movies</Navigationitem>

        <Navigationitem link='/checkout'>

        CheckOut</Navigationitem>
    </ul>
);

export default navigationItems;