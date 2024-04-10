import { createStore } from 'redux';

const countReducer = (state = 0, action) => {
  switch (action.type) {  
    case 'increment':  
      return state + 1;
    case 'decrement':  
      return state - 1;
    default:  
      return state;  
  }
}
const store = createStore(countReducer);

const render = () => {
  document.getElementById('count').text = store.getState(); // Display the current state.
}
render(); // Render once with the initial state of 0.

store.subscribe(render); // Re-render on state changes.

document.getElementById('plusButton').addEventListener('click', () => {  
  store.dispatch({ type: 'increment' }); // Request a state change.
});