import React from "react"
import useDarkMode from "use-dark-mode"
import Emoji from "react-emoji-render";
import SunIcon from "../images/icons/sun-icon.svg";
import MoonIcon from "../images/icons/moon-icon.svg";
import Sun from "../images/icons/sun.svg"
import Moon from "../images/icons/moon.svg"


export default props => {
    const darkMode = useDarkMode(false) //defaults to false 
    return (
      <>
        {darkMode.value ? (
          <button
            type="button"
            aria-label="light mode"
            onClick={darkMode.disable}
            className="sunIcon"
          >
            {/* <Emoji text="☀️"/> */}
            <img src={Sun} style={{height: '30px', width: '30px'}}/>
          </button>
        ) : (
          <button
            type="button"
            aria-label="dark mode"
            onClick={darkMode.enable}
            className="moonIcon"
          >
            {/* <Emoji text="🌙"/> */}
            <img src={Moon} style={{height: '30px', width: '30px'}}/>
          </button>
        )}
      </>
    )
}