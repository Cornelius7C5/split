import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cells: 0
        };

        setInterval(this.tick, 1000);
    }

    tick = () => {
        // this.setState(state => ({
        //     cells: state.cells - 1
        // }));
    }

    addCoin = () => {
        this.setState(state => ({
            cells: state.cells + 1
        }));
    }

    render() {
        return (
            <div>
                Hello {this.props.name}!
                <br />
                You have {this.state.cells} coins.
                <br />
                <button onClick={this.addCoin}>
                    Get +1 coin
                </button>
            </div>
        );
    }
}

export default App;
