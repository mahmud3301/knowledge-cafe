import { useState } from 'react'
import './App.css'
import BodyCards from './Components/BodyCards/BodyCards'
import SideCard from './Components/SideCard/SideCard'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <div className='flex'>
        <div className='lg:w-[70%] grid-cols-1'><BodyCards></BodyCards></div>
        <div className='lg:w-[30%] mt-10'><SideCard></SideCard></div>
      </div>
    </div>
  )
}

export default App
