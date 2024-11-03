
import './App.css';
import Home from './pages/home';
import Navbar from './pages/navbar';
import Projects from './pages/projects';
import Experties from './pages/experties';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>
      <Experties/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
