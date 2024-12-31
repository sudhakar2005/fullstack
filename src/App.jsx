import ClassCompEg from './Components/ClassComponents/ClassCompEg';
import About from './Components/FunctionalComponent/About';
import Home from './Components/FunctionalComponent/Home';
import Gallery from './Components/FunctionalComponent/Gallery';
import Contact from './Components/FunctionalComponent/Contact';
import NavBar from './Components/FunctionalComponent/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <ClassCompEg/>
    </div>
  )
}

export default App
