import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Movie.module.css'

class Movie extends Component {


    render() {
        let movie = null;
        let assignedClasses = [classes.Movie];

        switch (this.props.genre) {
            case ('drama'):
                assignedClasses.push(classes.drama);
                movie = (
                <div className={assignedClasses.join(' ')}>
                     <p>Name: {this.props.name}. Genre: {this.props.genre}</p>
                     <p>Available tickets: {this.props.availableTickets}</p>
                </div>
                )
                break;

            case ('action'):
                assignedClasses.push(classes.action);
                movie = <div className={assignedClasses.join(' ')}>
                    <p>{this.props.name}. Genre: {this.props.genre}</p>
                    <p>Available tickets: {this.props.availableTickets}</p>
                </div>
                break;

            case ('comedy'):
                assignedClasses.push(classes.comedy);
                movie = <div className={assignedClasses.join(' ')}>
                    <p>{this.props.name}. Genre: {this.props.genre}</p>
                    <p>Available tickets: {this.props.availableTickets}</p>
                </div>
                break;

        }
        return movie;
    }
};

Movie.propTypes = {
    type: PropTypes.string
};

export default Movie;