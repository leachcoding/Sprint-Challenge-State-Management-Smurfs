import React from 'react';
import axios from 'axios';

// fetchVillage imports to fetchVillage
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchVillage = () => dispatch => {
  dispatch({type:START_FETCHING});

  axios.get('http://localhost:3333/smurfs')
    .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }));
};

// imports to NewSmurf.js
export const NEW_SMURF_FETCH_REQUEST = 'NEW_SMURF';
export const NEW_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const NEW_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const new_smurf = (smurf) => (dispatch) => {
  dispatch({type: NEW_SMURF_FETCH_REQUEST});

  return axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => dispatch({type: NEW_SMURF_SUCCESS, payload: response.data}))
    .catch(error => dispatch({type: NEW_SMURF_FAILURE, payload: error}));
};
