import Home from './components/Home'
import {useState } from 'react'
import { ThemeContext } from './components/ThemeContext'
import { BrowserRouter } from 'react-router-dom';


function App() {
  var [theme,setTheme] = useState('');
  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <Home/>
    </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
