import React from 'react';
import './Header.css';

const Header = () => {
  return <>
    <div className='Logo-Contaner'>
        <div className='Container-bta'>
            <img className='BTA-img' src='./Assets/Img/IT-BUSINESS-TODAY-COLOUR-1.png' alt='BTA-Logo' width={180}></img>
        </div>

        <div className='Comp-logo' align="right">
            <p className='Text-p'>Sponsored by</p>
            <img className='Comp-logo-img' src='./Assets/Img/talkdesk_logo.png' alt='BTA-Logo' width={200}></img>
        </div>
    </div>
  </>;
};

export default Header;
