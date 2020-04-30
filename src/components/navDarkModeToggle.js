import React from "react"
import useDarkMode from "use-dark-mode"

export default props => {
    const darkMode = useDarkMode(false) //defaults to false 
    return (
      <>
        {darkMode.value ? (
          <button
            type="link"
            aria-label="light mode"
            onClick={darkMode.disable}
            className="nav-dark-mode-toggle"
          ><span>️☀️Light Mode</span></button>
        ) : (
          <button
            type="button"
            aria-label="dark mode"
            onClick={darkMode.enable}
            className="nav-dark-mode-toggle"
          ><span>🌙Dark Mode</span></button>
        )}
      </>
    )
}