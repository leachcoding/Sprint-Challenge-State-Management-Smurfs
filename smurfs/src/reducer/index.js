import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, NEW_SMURF_FETCH_REQUEST, NEW_SMURF_SUCCESS, NEW_SMURF_FAILURE  } from '../actions';

const initState = {
  smurfs: [],
  isFetching: false,
  error: '',
};

const reducer = (state=initState, action) => {
  switch(action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case NEW_SMURF_FETCH_REQUEST:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isFetching: true,
        error: ''
      };
    case NEW_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ''
      };
    case NEW_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default: return state;
  }
};

export default reducer;
