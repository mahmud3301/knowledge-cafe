import { useState } from 'react'
import './App.css'
import BodyCards from './Components/BodyCards/BodyCards'
import SideCard from './Components/SideCard/SideCard'
import Header from './Components/Header/Header'

function App() {
  const [readTime, setReadTime] = useState(0);
  const [bm, setBm] = useState([]);
  const handleBm = (id) => {
    console.log(id);
    const newBm = [...bm, id];
    setBm(newBm);
  }
  const handleReadTime = (time) => {
    const newReadTime = parseInt(readTime) + parseInt(time);
    setReadTime(newReadTime);
    console.log(newReadTime);
  }
  return (
    <div className="App w-full h-full">
      <Header></Header>
      <div className='flex'>
        <div className='lg:w-[70%] grid-cols-1'><BodyCards  handleBm={handleBm} handleReadTime={handleReadTime}></BodyCards></div>
        <div className='lg:w-[30%] mt-10 ml-5'><SideCard readTime={readTime} bm={bm}></SideCard></div>
      </div>
    </div>
  )
}

export default App
