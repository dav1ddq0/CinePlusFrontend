import React from 'react'
import TextField from '@material-ui/core/TextField';

export default class MyCustomeField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'Enter text',
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    handleClick = () => {
        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <div>
                <TextField
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Reset Text</button>
            </div>
        );
    }
}