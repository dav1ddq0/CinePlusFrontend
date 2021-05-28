import React, { Component } from 'react'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Movie from './Movie/Movie'
import classes from './Movies.module.css'

class Movies extends Component {



    render() {
        console.log('[Movies.js] rendering...');

        const moviesToRender = () => {
            return this.props.movies.map((movie, index) => {
                return (
                    <li>
                        <Movie
                            click={() => this.props.clicked(index)}
                            name={movie.name}
                            genre={movie.genre}
                            key={movie.id}
                            changed={(event) => this.props.changed(event, movie.id)}
                            isAuth={this.props.isAuthenticated}
                        />
                    </li>

                );
            })
        };

        return (
            <ul className={classes.Movies}>
                {moviesToRender()}
            </ul>
        );
    }
}

export default Movies;


// return this.props.movies.map((movie, index) => {
    //        });
//><Movie
//     click={() => this.props.clicked(index)}
//     name={movie.name}
//     genre={movie.genre}
// />