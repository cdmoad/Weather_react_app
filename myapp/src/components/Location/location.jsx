import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {changeLocation} from '../../features/location'
import {setTemp,setHumidity,setWind,setClouds,setIcon} from '../../features/weather'
import {  Input ,Space} from 'antd';
import './location.css'
import axios from 'axios'
import { addListener } from '@reduxjs/toolkit';
 

function Location() {

    const dispatch=useDispatch();
    const id="ed62a03506280641151952635881466a"

     

function getLocation(e){
dispatch(changeLocation(e))
axios.get(`https://api.weatherapi.com/v1/current.json?key=f67a41e8f3044a54bac140811232502&q=${e}&aqi=no`)
.then((response)=>{
  console.log(response.data)
   dispatch(setTemp(response.data.current.temp_c))
   dispatch(setWind(response.data.current.wind_kph))
   dispatch(setHumidity(response.data.current.humidity))
   dispatch(setClouds(response.data.current.cloud))
   dispatch(setIcon(response.data.current.condition.icon))

}).catch(err=>{console.warn("No such city found")  
          dispatch(changeLocation("city"))})
}



  return (
    <>
    
    <div className='location_container'>
      <Space>
        <Input.Search 
      placeholder="input search text"
      allowClear
      onSearch={getLocation}
      style={{
        width: 250,
      }}
    />
    </Space>
    </div>

    </>

  )

}

export default Location