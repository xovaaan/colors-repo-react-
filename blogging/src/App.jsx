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
      <div className='card'>
        <h3 className='card-title'>Iron Man</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, delectus. Error amet repudiandae itaque fugit obcaecati, ipsam vero et ad omnis hic pariatur assumenda excepturi rem illum, numquam nulla neque perspiciatis impedit doloremque vitae cum dolorum minima ratione! Reprehenderit odio neque dicta architecto unde necessitatibus? Eaque temporibus optio repellendus. Molestias!</p></div>
      </div>

   
      
  
  )
}

export default App
