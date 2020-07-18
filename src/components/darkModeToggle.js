import React from "react"
import useDarkMode from "use-dark-mode"
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
            className="nav-button"
          >
            <img className="sunIcon" src={Sun} />
          </button>
        ) : (
          <button
            type="button"
            aria-label="dark mode"
            onClick={darkMode.enable}
            className="nav-button"
          >
            <img className="moonIcon" src={Moon} />
          </button>
        )}
      </>
    )
}