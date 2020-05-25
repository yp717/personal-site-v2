import React, { Component } from 'react';
import Lottie from 'lottie-react-web'
import animation from '../animation-data/sun-and-moon.json'

export default class DarkModeToggleAnim extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggled: false }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
          isToggled: !state.isToggled
        }));
    }

    render() {
        const defaultOptions = {
            animationData: animation,
            loop: false,
            width: 65,
            height: 65,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            },
        };

        return(
            <button
            className="grow"
                style={{width: '65px', cursor: 'pointer'}}   
                onClick={this.handleClick}
            >
            <Lottie
              direction={this.state.isToggled ? 1 : -1}
              options={defaultOptions}
            />
            </button>
        )
    }
}