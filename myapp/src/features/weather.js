import {createSlice} from '@reduxjs/toolkit'

const initialStateValue={temp : 0,humidity:0,wind:0,clouds:0,icon:""};

export const weatherSlice=createSlice({
    name:"weather",
    initialState:{value:initialStateValue},
    reducers:{
        setTemp: (state,action)=>{
          state.temp=action.payload
        },
        setHumidity: (state,action)=>{
          state.humidity=action.payload
        },
        setWind: (state,action)=>{
            state.wind=action.payload
            },
        setClouds: (state,action)=>{
            state.clouds=action.payload
            },
        setIcon: (state,action)=>{
            state.icon=action.payload
            }
        
    }
})

export const {setTemp,setHumidity,setWind,setClouds,setIcon}= weatherSlice.actions

export default weatherSlice.reducer