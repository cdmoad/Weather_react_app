import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {changeLocation} from '../../features/location'


function Location() {

    const dispatch=useDispatch();

function getLocation(e){
dispatch(changeLocation(e.target.value))
}



  return (
    <>
    
    <div className='location_container'>

        <input type='text' onChange={getLocation}></input>

        <p>ggg</p>

    </div>

    </>

  )

}

export default Location