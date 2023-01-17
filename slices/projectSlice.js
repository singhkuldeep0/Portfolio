import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects:[]
}

export const projectSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   setProjects:(state , action)=>{
    console.log("dispatched" , state)
    state.projects = action.payload
   }
  }
})

// Action creators are generated for each case reducer function
export const { setProjects } = projectSlice.actions

export default projectSlice.reducer