import React from 'react';
import ReactHtmlParser from "react-html-parser";
import './LandingPage.css';
import Form from './FormPage';

const LandingPage = ({Data}) => {
    return <>
    {Data && Data.map((curData) => {
        return (
            <>
                <div className='landing-container'>
                    <div className='left-container' key={curData._id}>
                        <img 
                            className='landing-img' 
                            src='./Assets/Img/What-will-your-contact-center-be-like-post-lockdown.png' 
                            alt='landing img' 
                            width={250}>
                        </img>

                        <h3 className='heading-text'>{ReactHtmlParser(curData.title)}</h3>
                        <p className='text-p'>
                            {ReactHtmlParser(curData.abstract)}
                        </p>
                    </div>
                    <div className='right-container'>
                        <Form />
                    </div>
                </div>
            
            </>
        )
    })}
    
</>;
};

export default LandingPage;