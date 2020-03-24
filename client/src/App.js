import React from 'react';
import logo from './logo.svg';

import axios from 'axios';
import './App.css';
import AddQuote from './AddQuote';
import QuoteList from './QuoteList';
import { ADD_QUOTE } from './reducers/dataReducer';
import useApplicationData from './hooks/useApplicationData';

import { Route, Switch, Link } from 'react-router-dom';

function App() {
  const { state, dispatch } = useApplicationData();

  const addNewQuote = content => {
    console.log('addNewQuote');
    return axios({
      method: 'POST',
      url: '/api/quotes',
      data: { quote: content },
    })
      .then(result => {
        dispatch({ type: ADD_QUOTE, quote: result.data });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='App'>
      <ul class='nav'>
        <li class='nav-item'>Famous Movie Quotes</li>
        <li>|</li>
        <li class='nav-item'>
          <Link to='/quotes'>Listing Quotes</Link>
        </li>
        <li>|</li>

        <li class='nav-item'>
          <Link to='/quotes/new'>Add New Quote</Link>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path='/quotes'
          render={props => <QuoteList {...props} quotes={state.quotes} />}
        />
        <Route
          path='/quotes/new'
          render={props => <AddQuote {...props} addNewQuote={addNewQuote} />}
        />
        />
      </Switch>
    </div>
  );
}

export default App;
