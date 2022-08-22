import React, { useState } from 'react';
import './MainpageConsole.css';
// import Edm from './EDM/Edm';


import Tabs from './TabComponents/Tabs';

const MainpageConsole = () => {
    // const [campName, setcampName] = useState('');
  return (
    <>
        <div className='mainContainer'>
            <div className='container'>
                <div className="topContainer">
                    <img className='xdbsLogo' src="./Assets/Logos/XDBS-Logo.png"  alt="xdbs-logo" width="120" ></img>
                    <button className='previewBtn'><span className='textPreview'>Preview</span></button>
                </div>
                    <div className='containerInner'>
                    
                        <div className='leftContainer'>
                            <div className='innerLeft'>
                                <h4>Select</h4>
                                
                                    <select className='dropDown'>
                                        <option>Select Client</option>
                                        <option>TGIF</option>
                                        <option>IP</option>
                                        <option>ACE</option>
                                        <option>W8</option>
                                        <option>MTH</option>
                                    </select><br/><br/>

                                    <select className='dropDown'>
                                        <option>Select Touch</option>
                                        <option>1st Touch</option>
                                        <option>2nd Touch</option>
                                        
                                    </select>
                                    
                                    
                                
                            </div>
                        </div>
                        <div className='mainRightContainer'>
                           
                            <div className='rightContainer'>
                               <Tabs />
                            </div>
                        </div>
                    </div>
            </div>  
        </div> 
    </>
  )
}

export default MainpageConsole;