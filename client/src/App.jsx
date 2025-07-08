import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AllMemories from './pages/AllMemories';


function App() {
  return (
    <Router>
    <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/all-memories" element={<AllMemories />} />
      </Routes>
    </Router>
  );
}

export default App;
