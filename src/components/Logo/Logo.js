import React from 'react';

import movieLogo from '../../assets/images/movieLogo.jpg';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={movieLogo} alt="MyMovie"/>
    </div>
);

export default logo;