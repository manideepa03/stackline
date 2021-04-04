import { configureStore } from '@reduxjs/toolkit';


// import { combineReducers } from "redux"
// import { reducer as formReducer } from "redux-form"
const INITIAL_STATE = {
	_id: null,
	isSignedIn: false,
    employeeList:[]
}

const employeeReducer = (state = INITIAL_STATE, action) => {
    const newState = {...state}
	switch (action.type) {
		// case FETCH_USER:
		// 	return {
		// 		...state,
		// 		_id: action.payload._id,
		// 		isSignedIn: action.payload.isSignedIn,
		// 		currentUserName: action.payload.firstName
		// 	}
        case "GOT_DATA":
            newState.employeeList = action.payload
            break
		default:
			return state
	}
    return newState
}

export default configureStore({
  reducer: employeeReducer
 
});



