/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  GET_SMURF, 
  GET_SUCCESS, 
  GET_FAILURE,
  ADD_SMURF,
  ADD_SUCCESS,
  ADD_FAILURE
} from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURF:
          return {
            ...state,
            fetchingSmurfs: true,
            error: '',
          }

        case GET_SUCCESS:
          return {
            ...state,
            fetchingSmurfs: false,
            error: '',
            smurfs: action.payload
          }

        case GET_FAILURE:
          return {
            ...state,
            fetchingSmurfs: false,
            error: action.payload
          }

        case ADD_SMURF:
          return {
            ...state,
            addingSmurf: true,
            error: ''

          }

        case ADD_SUCCESS:
          return {
            ...state,
            smurfs: action.payload,
            addingSmurf: false,
            error: ''
          }

        case ADD_FAILURE:
          return {
            ...state
          }
          
      default: return state;
    }
}

export default rootReducer;
