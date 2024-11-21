import './App.css';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import PostContainerPages from './Pages/PostContainerPages';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailedPost/:postId" element={<PostContainerPages />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
