const nextColor = { type: 'NEXT_COLOR' };
const previousColor = { type: 'PREVIOUS_COLOR' };
const INITIAL_STATE = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };

const reducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {...state, index: state.index+1};
    case 'PREVIOUS_COLOR':
      return {...state, index: state.index-1};
  
    default:
      return state;
  }

};

const store = Redux.createStore(reducer);
const colorValue = document.getElementById('value');
const buttonNext = document.getElementById('next').addEventListener('click', () => {
  const { index, colors } = store.getState();
  if (index < colors.length) {
    store.dispatch(nextColor);
    colorValue.innerHTML = colors[index]; 
  console.log(store.getState());
  }
});
const buttonPrevious = document.getElementById('previous').addEventListener('click', () => {
   const { index, colors } = store.getState();
  if (index >= 0) { 
    store.dispatch(previousColor);
    colorValue.innerHTML=colors[index]; 
console.log(store.getState());
  }
});