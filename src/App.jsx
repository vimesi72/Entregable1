import { useState } from 'react'
import './App.css'
import Buttom from './components/Buttom'
import Phrase from './components/Phrase'
import phrases from './data/phrases.json'

function App() {

  const [index, setIndex] = useState(0);
  const outIndex = (index) => {
    setIndex(index)
  }

  return (
    <>
     <div className='card'>
        <Phrase data={ phrases[index] }/>
        <Buttom outIndex = { outIndex } phrase = {phrases.length}  />   
    </div>
    </>
  )
}

export default App
