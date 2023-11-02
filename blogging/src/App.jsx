import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const colors = {
  color : "red",
  backgroundColor : "black",
  fontSize : "4rem",
}
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <h1 style={colors}>I am sami</h1>
      </div>
      
  
  )
}

export default App
