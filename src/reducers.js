import {ADD_MANTRA} from "./actions";

export function mantra(state= [], action){
  let newState = [...state];
  switch(action.type){
    case ADD_MANTRA:
        newState.push(action.payload.mantra);
      break;
    default:
      break;
  }
  return newState;
}