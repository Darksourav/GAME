import { useState } from 'react'
import './App.css'
import './index.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
    😸 Exploding Kitten 
    <hr /></h1>
    <Cards/>
    </>
  )
}

export default App
