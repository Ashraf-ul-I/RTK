import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePages from './Pages/HomePages'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddBook from './Pages/AddBook'
import EditBook from './components/editBook/EditBook'
import Navbar from './components/Navbar/Navbar'
function App() {
  

  return (
    <>
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/addBook' element={<AddBook/>}/>
        <Route path='/editBook/:bookId' element={<EditBook/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
