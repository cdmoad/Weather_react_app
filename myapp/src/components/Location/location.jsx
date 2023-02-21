import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {changeLocation} from '../../features/location'
import {  Input ,Space} from 'antd';
import './location.css'
 


function Location() {

    const dispatch=useDispatch();

function getLocation(e){
dispatch(changeLocation(e))
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
        width: 200,
      }}
    />
    </Space>
    </div>

    </>

  )

}

export default Location