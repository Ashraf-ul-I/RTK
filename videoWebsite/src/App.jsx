import Footer from "./components/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Video from "./pages/Video"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

function App() {

  return (

    <Router>
    <Navbar/>
    {/* //Page level Content */}
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/video/:videoId" element={<Video/>}></Route>
    </Routes>
   
    <Footer/>
    </Router>

  )
}

export default App
