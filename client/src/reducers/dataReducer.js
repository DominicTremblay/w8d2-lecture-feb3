// Goal of the reducer

// Returning the new state whenever you changed the state
// dispatch function to update the state

// action object:

// {
//   type,
//   data
// }

export const LOAD_QUOTES = 'LOAD_QUOTES';
export const ADD_QUOTE = 'ADD_QUOTE';

const dataReducer = (state, action) => {
  const actions = {
    LOAD_QUOTES: {
      ...state,
      quotes: action.quotes,
      loading: false,
    },
    ADD_QUOTE: {
      ...state,
      quotes: [...state.quotes, action.quote],
    },
  };

  return actions[action.type] || state;
};

export default dataReducer;
