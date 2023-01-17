import { configureStore , combineReducers } from '@reduxjs/toolkit'
import { createWrapper , HYDRATE } from 'next-redux-wrapper'
import projects from './slices/projectSlice'


const combineReducer = combineReducers({
  projects
})

const masterReducer = (state,action)=>{
  if(action.type === HYDRATE){
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  else{
    return combineReducer(state,action)
  }
}

export const makeStore = () => configureStore({
  reducer:masterReducer
  
})

export const wrapper = createWrapper(makeStore)

