import React, { Component } from 'react';
import axios from 'axios'

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Movies from '../../components/Movies/Movies';
import Modal from '../../components/UI/Modal/Modal';

class VirtualCinema extends Component {
    // componentDidMount () {
    //     axios.get()
    // }

    state = {
        movies: [
            {name:"Atlantis", genre:"drama", availableTickets:2},
            {name:"TBBT", genre:"comedy", availableTickets:3},
            {name:"Lonewolf", genre:"action", availableTickets:0}
        ]
    }

    render() {
        return  (
            <Aux>
                <Movies movies={this.state.movies}/>
                <div>Controls</div>
            </Aux>
        );
    }
}

export default VirtualCinema;