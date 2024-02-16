import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Slider from './Slider.js';
import About1 from './About1.js';
import Skill from './Skill.js';
import Resume1 from './Resume1.js';
import Portfolio1 from './Portfolio1.js';
import Fun from './Fun.js';
import Blog from './Blog1.js';
import Get from './Get.js';
import Services from './Services.js';
import Footer from './Footer.js';

function App() {
  return (
    // https://hasnaanajmi.com/TM/mirya/
    <div className='App'>
      <Header></Header>
      <Slider></Slider>
      <About1></About1>
      <Skill></Skill>
      <Services></Services>
      <Resume1></Resume1>
      <Portfolio1></Portfolio1>
      <Fun></Fun>
      <Blog></Blog>
      <Get></Get>
        <Footer></Footer>
    </div>
  );
}

export default App;
