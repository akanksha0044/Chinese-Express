import React from 'react';
import './style.css';
import bannerImg from './banner.png';
import Logo from '../../Common/Logo';
//import Logo from '../../common/Logo';

const Banner= ({ handleScrollMenu }) => {
  return (
    <header>
    <div className='header-content'>
      <Logo/>
      <div className='content-main'>
        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p>
        <button onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
  )
}

export default Banner