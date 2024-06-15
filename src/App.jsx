import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import List from './components/List';
import Topbar from './components/TopBar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    console.log(count)
  },[count])
  
  return (
    <>
     <Router>
        <main className='content flex flex-col justify-between h-screen'>
          <Topbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/list" element={<List/>} />
          </Routes>
          <Footer/>
        </main>
      </Router>
    </>
  )
}

export default App
