import {createSlice} from '@reduxjs/toolkit'

const initialStateValue="";

export const locationSlice=createSlice({
    name:"location",
    initialState:{value : initialStateValue},
    reducers:{
        changeLocation: (state,action)=>{
          state.value=action.payload
        },
        
    }
})

export const {changeLocation}= locationSlice.actions

export default locationSlice.reducer