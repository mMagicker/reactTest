import React, { createContext } from "react"

type ThemeContextType = {
  theme?: string
  changeTheme?: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType>({})

export default function Context() {
  const [theme, setTheme] = React.useState("red")
  const changeTheme = (color = "blue") => {
    setTheme(color)
  }

  const value = { theme, changeTheme }
  return (
    <div>
      <h4>fahter</h4>
      <button onClick={() => changeTheme()}>change Theme</button>
      <ThemeContext.Provider value={value}>
        <Son />
      </ThemeContext.Provider>
    </div>
  )
}

function Son() {
  const _context = React.useContext(ThemeContext)

  const { theme, changeTheme } = _context
  const changeFatherTheme = () => {
    changeTheme("green")
  }
  return (
    <div style={{ backgroundColor: theme }}>
      <h5>son</h5>
      <button onClick={() => changeFatherTheme()}>change Father Theme</button>
    </div>
  )
}
