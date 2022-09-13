import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Banner />

      <About />

      <Skills />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
