import React, {useEffect, useState} from 'react';
// import { useParams } from 'react-router-dom';

import './TgifSelect.css';

import Header from '../All Champions/TGIF/Header/Header';
import Footer from '../All Champions/TGIF/Footer/Footer';
import Edm from '../All Champions/TGIF/Edm/Edm';
import Landing from '../All Champions/TGIF/Landing/LandingPage';
import ThankYou from '../All Champions/TGIF/Thanks/ThankYou';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

// import Data from '../../../../../server/623dee02dcce40d23299a894.json'
// import  Data  from '../All Champions/TGIF/dataApi';

import Axios from 'axios';

const TgifSelect = () => {
    //  const [allData, setAllData] = useState(Data);
    const [dataList, setdataList] = useState([]);
    // console.log(dataList, 'this is datalist1');
    const URL = window.location.href
    let id = URL.split('/')[3]
    //alert(id);


    useEffect(() =>{
        Axios.get(`http://localhost:5999/api/v1/tgif/${id}`).then((response) =>{
            setdataList(response.data);
            console.log(response.data);
        })
        .catch(err => {
          console.log(err)
        })
    },[dataList._id, id]);
    
    //  console.log(dataList._id, 'this is datalist');

    return <>

      <Router>
        <div className='Main-container'>
          <div className='Container'>
            <Header />
            <hr />
            <Routes>
                  <Route path='/' exact element={<Edm Data={dataList}/>} />
                  <Route path='/edm' exact element={<Edm Data={dataList}/>} />
                  <Route path="/landing" element={<Landing Data={dataList} />} />
                  <Route path="/thankyou" element={<ThankYou  Data={dataList}/>} />
             
            </Routes>
            <hr />
            <Footer />
          </div>
        </div>
      </Router>
      <Outlet />
  </>;
};

export default TgifSelect;

