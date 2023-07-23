//import logo from './logo.svg';
import './App.css';
import "react-multi-carousel/lib/styles.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Test from './components/testimonials/Test';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
import Testimonial from './components/Testimonial/Testi';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Testimonial/>
      <Test/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
