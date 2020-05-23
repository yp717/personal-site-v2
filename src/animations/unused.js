import React from "react";
import Lottie from "react-lottie";

export default class LottieControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    handleClick = () => {
        const {isStopped, direction} = this.state;
        this.setState({isStopped: !this.isStopped})
        this.setState({direction: direction * -1})
    };

    render() {
        const defaultOptions = {
            loop: false,
            autoplay: false,
            isStopped: true,
            animationData: require("../animation-data/sun-and-moon.json"),
            direction: this.state.direction || 1,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            },
        };
        
        const buttonStyle = {
            width: 65,
            marginTop: 0,
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
        }

        return (
            // this should be a button not a div
        <div
            style={buttonStyle}   
            onClick={this.handleClick}
        >
            <Lottie
                options={defaultOptions}
                isPaused={this.state.isPaused}
            />
        </div>
    );
  }
}

//////

import React from "react";
import Lottie from "react-lottie";

export default class LottieControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isStopped: false, isDarkMode: false };
        
        // Need this binding to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
            direction: state.isStopped ? state.direction : (state.direction * -1),
            isStopped: state.isStopped ? false : false,
            // console.log("called handler")
            // console.log(isStopped)
            // if (isStopped) {
            //   this.setState({direction: direction * -1})
            // }
            // this.setState({isStopped: false})
        }));
    }

    // render(){
    //     return(
    //         <button onClick={this.handleClick}>
    //             {this.state.isToggleOn ? 'ON' : 'OFF'}
    //         </button>
    //     )
    // }
    // handleClick = () => {
    //     const { isDarkMode } = this.state;
    //     if(!isDarkMode) {
    //         this.setState({ direction: 1, isDarkMode: true });
    //     } else {
    //         this.setState({ direction: -1, isDarkMode: false });
    //     }
    // };

    render() {
        const defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: require("../animation-data/sun-and-moon.json"),
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            }
        };
        
        const buttonStyle = {
            width: 65,
            marginTop: 0,
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
        }

        return (
            // this should be a button not a div
        <div>
            <button style={buttonStyle} onClick={this.handleClick}>
                <Lottie
                    options={defaultOptions}
                    isStopped={this.state.isStopped}
                />
            </button>
        </div>
    );
  }
}


/////


import React, { useState, useMemo, useCallback } from "react";
import Lottie from 'react-lottie'
import animationData from '../animation-data/sun-and-moon.json'

const buttonStyle = {
    display: "inline-block",
    margin: "10px auto",
    marginRight: "10px",
    border: "none",
    color: "white",
    backgroundColor: "#647DFF",
    borderRadius: "2px",
    fontSize: "15px"
  };
  
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  function ControlledLottie() {
    const [isPaused, setIsPaused] = useState(false);
    const [isStopped, setIsStopped] = useState(false);
  
    const handlePlay = useCallback(() => {
      setIsStopped(false);
      setIsPaused(false);
    }, []);
  
    const handleStop = useCallback(() => {
      setIsStopped(true);
    }, []);
  
    const handlePause = useCallback(() => {
      setIsPaused(!isPaused);
    }, [isPaused]);
  
    return useMemo(() => {
      return (
        <div className="controlled">
          <button style={buttonStyle} onClick={handlePlay}>
          <Lottie
            options={defaultOptions}
            height={65}
            width={65}
            isStopped={isStopped}
            isPaused={isPaused}
          />
          </button>
          <button style={buttonStyle} onClick={handleStop}>
            Stop
          </button>
          <button style={buttonStyle} onClick={handlePause}>
            Pause
          </button>
        </div>
      );
    }, [isStopped, isPaused, handleStop, handlePlay, handlePause]);
  }
  
  export default ControlledLottie;
  