import Header from "./components/Header";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

export default function App() {
  
  return (
    <div 
      className='bg-lime-100 dark:bg-[#0f1505] flex flex-col mx-auto' 
    >
      <Header />
      <Home />
      <Projects />
      <Skills />
      <ContactUs />
      <Footer />
    </div>
  )
}
