import { combineReducers, configureStore } from '@reduxjs/toolkit';
import staffReducer from './reducers/staffReducer'


const combinedReducer = combineReducers({
    staff:staffReducer
})

const rootReducer = (state,action)=>{
    
    return combinedReducer(state,action)
}

const store = configureStore({
  reducer:rootReducer,
  devTools:true
});


export default store;
