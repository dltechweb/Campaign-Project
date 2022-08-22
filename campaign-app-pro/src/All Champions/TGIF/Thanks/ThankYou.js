import React from 'react';
import ReactHtmlParser from "react-html-parser";

import './ThankYou.css';

const ThankYou = ({Data}) => {
    return <>

    {Data && Data.map((curData) =>{
      return(
        <>
              <div className='main-ty-container'>
                <div className='img-thankyou'>
                    <img    src='./Assets/Img/What-will-your-contact-center-be-like-post-lockdown.png'
                            alt='Thanks-thumbnail'
                            width={250}> 
                    </img>
                </div>
                <div className='thankyou-content-container'>
                        <h3 className='thankyou-head-text'>Thank You...</h3>
                        <p className='thankyou-p-text'><span className='span-font-13'>for downloading</span> <b>"{ReactHtmlParser(curData.title)}"</b></p>

                        <div className='auto-download-t-container'>
                            <span>Your download will start automatically in 0 seconds...</span>
                            <p>If your download does not start automatically, click here to start your download.</p>
                        </div>
                </div>
              </div>
        
        </>
      )
    })}


  </>;
}

export default ThankYou;