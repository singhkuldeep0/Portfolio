import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects:[]
}

export const projectSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   setProjects:(state , action)=>{
      let projects = [...new Set(action.payload)]
      state.projects = projects
   }
  }
})

// Action creators are generated for each case reducer function
export const { setProjects } = projectSlice.actions

export default projectSlice.reducer