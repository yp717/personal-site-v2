import React from "react"
import useDarkMode from "use-dark-mode"


export default props => {
    const darkMode = useDarkMode(false) //defaults to false 
    return (
       <div>
            {darkMode.value ? (
              <button
                type="button"
                aria-label="light mode"
                onClick={darkMode.disable}
              >
                <h2>To Light Mode</h2>
              </button>
            ) : (
              <button
                type="button"
                aria-label="dark mode"
                onClick={darkMode.enable}
              >
                <h2>To Dark Mode</h2>
              </button>
            )}
          </div>
     
    )
}