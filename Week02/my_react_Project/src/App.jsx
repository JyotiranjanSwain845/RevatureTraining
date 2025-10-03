import Home from './components/Home'
import {useState } from 'react'
import { ThemeContext } from './components/ThemeContext'


function App() {
  var [theme,setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <Home/>
    </ThemeContext.Provider>
  )
}

export default App
