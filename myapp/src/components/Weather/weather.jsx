import React from 'react'
import {useSelector} from 'react-redux'
import {Descriptions} from 'antd';
import './weather.css'

function Weather() {

  const location=useSelector((state)=>state.location.value)
  
  return (
<div className='weather_container'>

    <Descriptions className='desc_container' title="Weather" >
    <Descriptions.Item id='desc'  label="UserName">{location}</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
  </Descriptions>

    </div>
  )
}

export default Weather