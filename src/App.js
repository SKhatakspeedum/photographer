import React from 'react';
import { useState } from 'react';
import './App.css';
import Signup from  './Components/Signup';
import Customer from './Components/Customer';
import Photographers from './Components/Photographers';
import PhotographerCityLanguage from './Components/PhotographerCityLanguage';
import PhotographerPhoto from './Components/PhotographerPhoto';
import Thanks from './Components/Thanks';
import Login from './Components/Login';





function App() {
  const [name,setName]=useState({
    signup : true, 
    customer: false,
    photographers : false,
    thanks: false,
    photographercitylanguage:false,
    photographerphoto: false,
    login:false,
  });
  return (
    <>
    { name?.signup && <Signup setName={setName} />}
    { name?.customer && <Customer setName={setName} />}
    { name?.photographers && <Photographers  setName={setName}/>}
    { name?.thanks && <Thanks  setName={setName}/>}  
    { name?.photographercitylanguage && <PhotographerCityLanguage  setName={setName}/>}
    { name?. photographerphoto && <PhotographerPhoto  setName={setName}/>} 
    { name?.login && <Login setName={setName} />}  
    </>
  );
}

export default App;
