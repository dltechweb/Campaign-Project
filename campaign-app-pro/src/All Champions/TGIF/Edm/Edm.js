import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

import './Edm.css';

const Edm  = ({Data}) => {
       
        return ( 
        <>
               {Data && Data.map((curData) =>{
                    return(
                    <>
                        <div className='Main-Content-Container'  key={curData._id}>
                            <p>{curData._id}</p>
                            <div className='Heading-Container' >
                                <h3 className='Heading-Text' >{curData.title}</h3>
                            </div>
                            <div className='content-container'>
                                    <p className='content-text'> <img className='content-img' src="./Assets/Img/What-will-your-contact-center-be-like-post-lockdown.png" alt='Thumnail' width="300"></img>
                                    
                                    {/* {ReactHtmlParser(curData.Abstract)} */}
                                    {ReactHtmlParser(curData.abstract)}
                                    {ReactHtmlParser(curData.abstractone)}
                                  

                                   
                                </p>

                                
                            </div>
                            <p className='content-opt-in'>
                                By clicking/downloading the resource, you agree to provide your business contact details.
                                We may share this information with our sponsors. Please refer to our Privacy Policy for further details.
                                You may also refer to our CCPA Policy.
                            </p>

                            <Link to="/landing">
                                <button className='content-btn'>
                                    <img className='donwload-btn-img' src='Assets/Img/down-arrow-download-btn.png' alt='Download Now' width={22}></img>
                                        Download now
                                </button>
                            </Link>

                            <div className='content-regards'>
                                <p className='text'>
                                    Best regards,<br/><br/>
                                    The Editorial Team<br />
                                    ITbusinessPlus   
                                </p>
                            </div>
                        
                        </div>
                        </>)
               })}  
               
            </>
        
        );
};

export default Edm;
