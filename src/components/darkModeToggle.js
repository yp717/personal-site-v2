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
                className="sunIcon"
              />
            ) : (
              <button
                type="button"
                aria-label="dark mode"
                onClick={darkMode.enable}
                className="moonIcon"
              />
            )}
          </div>
     
    )
}