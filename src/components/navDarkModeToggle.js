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
            className="is-background-blue-text nav-dark-mode-toggle"
          ><span role="img" aria-label="sun">️☀️Light Mode</span></button>
        ) : (
          <button
            type="button"
            aria-label="dark mode"
            onClick={darkMode.enable}
            className="is-background-blue-text nav-dark-mode-toggle"
          ><span role="img" aria-label="moon">🌙Dark Mode</span></button>
        )}
      </>
    )
}