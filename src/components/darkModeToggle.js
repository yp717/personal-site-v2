import React from "react"
import useDarkMode from "use-dark-mode"
import Emoji from "react-emoji-render";
import SunIcon from "../images/icons/sun-icon.svg";
import MoonIcon from "../images/icons/moon-icon.svg";

export default props => {
    const darkMode = useDarkMode(false) //defaults to false 
    return (
      <>
        {darkMode.value ? (
          <button
            type="button"
            aria-label="light mode"
            onClick={darkMode.disable}
            className="darkModeToggleButton"
          >
            <img className="sunIcon" src={SunIcon}/>
          </button>
        ) : (
          <button
            type="button"
            aria-label="dark mode"
            onClick={darkMode.enable} 
            className="darkModeToggleButton"
          >
            <img className="moonIcon" src={MoonIcon}/>
          </button>
        )}
      </>
    )
}