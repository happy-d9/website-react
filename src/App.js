import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './b_step/Home.js';
import Slider from './b_step/Slider.js';
import About1 from './b_step/About1.js';
import About from './b_step/About.js';
import Skill from './b_step/Skill.js';
import Resume from './b_step/Resume.js';
import Resume1 from './b_step/Resume1.js';
import Portfolio from './b_step/Portfolio.js';
import Portfolio1 from './b_step/Portfolio1.js';
import Fun from './b_step/Fun.js';
import Blog from './b_step/Blog.js';
import Blog1 from './b_step/Blog1.js';
import Get from './b_step/Get.js';
import Contact from './b_step/Contact.js';
import Services from './b_step/Services.js';
import Service from './b_step/Service.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // https://hasnaanajmi.com/TM/mirya/
    //https://livedemo00.template-help.com/wt_prod-19523/
    <div className='App'>
         <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="slider" element={ <Slider/> } />
        <Route path="about" element={ <About/> } />
        <Route path="about1" element={ <About1/> } />
        <Route path="skill" element={ <Skill/> } />
        <Route path="services" element={ <Services/> } />
        <Route path="service" element={ <Service/> } />
        <Route path="resume" element={ <Resume/> } />
        <Route path="resume1" element={ <Resume1/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        <Route path="portfolio1" element={ <Portfolio1/> } />
        <Route path="fun" element={ <Fun/> } />
        <Route path="blog" element={ <Blog/> } />
        <Route path="blog1" element={ <Blog1/> } />
        <Route path="get" element={ <Get/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
