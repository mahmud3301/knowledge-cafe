import { useState } from 'react'
import './App.css'
import BodyCards from './Components/BodyCards/BodyCards'
import SideCard from './Components/SideCard/SideCard'
import Header from './Components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [readTime, setReadTime] = useState(0);
  const [bm, setBm] = useState([]);
  const handleBm = (id) => {
    if (bm.find(blogs => blogs === id)) {
      toast.error('Already Bookmarked');
    } else {
      setBm([...bm, id]);
      toast.success('Bookmarked');
    }
  }
  const handleReadTime = (time) => {
    const newReadTime = parseInt(readTime) + parseInt(time);
    setReadTime(newReadTime);
    console.log(newReadTime);
  }
  return (
    <div className="App w-full h-full">
      <Header></Header>
      <div className='lg:flex md:flex'>
        <div className='lg:w-[70%]'><BodyCards handleBm={handleBm} handleReadTime={handleReadTime}></BodyCards></div>
        <div className='lg:w-[30%] mt-10 ml-5'><SideCard readTime={readTime} bm={bm}></SideCard></div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
