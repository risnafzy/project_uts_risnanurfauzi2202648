import './App.css'
import Navigation from './components/Navigation'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Gallery from './components/Gallery'

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Gallery" element={<Gallery />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
