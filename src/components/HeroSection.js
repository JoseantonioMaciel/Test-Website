import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {Link} from 'react-scroll'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/** <video src='/videos/TimeLaps.mp4' autoPlay loop muted />*/}
      
      <div>  </div>
    {/** <Link className = "IDK" to="something" smooth={true} duration={1000}>See Cards</Link>
      * <img alt="Error" src="images/MAIN.png"  />
      * 
     */}
      <div className='hero-btns'>
        {/** */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Learn More<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;