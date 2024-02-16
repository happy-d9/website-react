import {ProgressBar, Row,Col } from 'react-bootstrap';
import './Header.css';
function Skill() {
  return (  
    <div>
      <div className='skill_1'>
        <h2 className='text-center text-white my-5'>MY SKILLS</h2>
        <div className='skill_2'>
          <Row class='pg'>
            <div className='col-lg-6 col-sm-12 my-4'><ProgressBar now={75} /><span>JavaScript</span></div>
            <div className='col-lg-6 col-sm-12 my-4'><ProgressBar now={95} /><span>HTML5</span></div>
            <div className='col-lg-6 col-sm-12 my-4'><ProgressBar now={80} /><span>Css3</span></div>
            <div className='col-lg-6 col-sm-12 my-4'><ProgressBar now={89} /><span>Php</span></div>
            <div className='col-lg-6 col-sm-12 my-4'><ProgressBar now={90} /><span>jQuery</span></div>
            <div className='col-lg-6 col-sm-12 my-4'><ProgressBar now={85} /><span>Wordpress</span></div>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Skill;