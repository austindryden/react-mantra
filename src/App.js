import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {createStore} from 'redux';

const ADD_MANTRA='ADD_MANTRA';

function addMantra(){
  return {
    type: ADD_MANTRA,
    payload: {}
  }
}

const defaultState = [];
function mantra(state=defaultState, action){
  let newState = state;
  switch(action.type){
    case ADD_MANTRA:
      break;
    default:
      break;
  }
  return newState;

}

const store = createStore(mantra, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function App() {
  return (<React.Fragment>

  </React.Fragment>);
}

export default App;
