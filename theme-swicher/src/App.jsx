import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('.product-card').classList.remove("light", "dark")
    document.querySelector('.product-card').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
     <h1>Hello Theme</h1>
     
 <div className="layout layout--min-height">
  <div className="layout__container">
    <div className="layout__header">
      <ThemeButton></ThemeButton>
    </div>

    <div className="layout__body">
      <Card />
    </div>
  </div>
</div>


    </ThemeProvider>
  )
}

export default App
