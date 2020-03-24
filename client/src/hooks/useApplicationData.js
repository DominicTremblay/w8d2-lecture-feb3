import { useEffect, useReducer } from 'react';
import axios from 'axios';
import dataReducer, { LOAD_QUOTES } from '../reducers/dataReducer';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    quotes: [],
    loading: true,
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/quotes/',
    }).then(result => {
      console.log('Quotes', result.data);
      // update the state with the quotes
      dispatch({ type: LOAD_QUOTES, quotes: result.data });
    });
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
