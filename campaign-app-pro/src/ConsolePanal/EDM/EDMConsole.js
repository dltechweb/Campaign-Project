/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import Axios from 'axios';

import "./EDMConsole.css";


const EDMConsole = () => {
  const [campName, setcampName] = useState('');
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  
  const submit = () =>{
    Axios.post("http://localhost:5000/tgifs/add",{
        campName: campName,
        title: title,
        abstract: abstract,
        
    });
    console.log(campName+title+abstract)
};

  return (
    <>
      <div className="mainContainer-edm">
        <div className="Container-edm">
          <div className="formContainer-edm">
            {/* <form > */}

            <div className='campaignTextfielddiv'>
                {/* <label for='campName'>Enter Campaign Name:</label> */}
                <input className='campTextField' type='text' name='campName' id='campName' placeholder='Enter Campaign Name' onChange={(event) =>{setcampName(event.target.value);}}/>

                {/* <label for='campName'>Enter Privacy Link:</label> */}
                <input className='campTextField' type='text' name='campName' id='campName' placeholder='Enter Privacy Link'/>
            </div>


            <input type="text" className="inputEdm" id="title" name="title" placeholder="Enter Title" onChange={(event) =>{setTitle(event.target.value);}}/>
            <textarea id="abstract" name="abstract"  placeholder="Enter Abstract" onChange={(event) =>{setAbstract(event.target.value);}} />

            <div className="choosefileContainer-edm">

              <div className="fileContainer-edm">
                <label class="selectLogo-edm" for="upload">Select Logo</label>
                <input className="selectlogoInputfile" id="upload"  type="file"></input>
              </div>

              <div className="fileContainer-edm">
                <label class="selectLogo-edm" for="upload-thumbnail">Select Thumbnail</label>
                <input className="selectlogoInputfile" id="upload-thumbnail" type="file"></input>
              </div>
              
            </div>

            <input type="submit" value="Submit" onClick={submit} />
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EDMConsole;
