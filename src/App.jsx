import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Sidebar />
      <About />
      <Projects />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
