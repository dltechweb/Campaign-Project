import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return <>
    <div className='footer-container'>
        <p className='footer-text'>
            Copyright © 2022 XDBS Corporation<br/>
            Hawthorne, CA 90250 USA<br/>
            3501, Jack Northorp Ave, Ste C3873<br/>
            Please click here to read our privacy policy.<br/>
            <Link className='linkTextColor' to="/whitepapers/unsubscribed.html">
             Click here to unsubscribe
            </Link></p>
    </div>
  </>;
};

export default Footer;