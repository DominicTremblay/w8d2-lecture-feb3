import React, { useState } from 'react';

const AddQuote = ({ addNewQuote }) => {
  const [text, setText] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // calling add new quote

    addNewQuote(text);

    // reset the input box
    setText('');
    // redirect
  };

  return (
    <div className='container'>
      <h1>Add a New Quote</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ width: '20em' }}>
          <div className='form-group'>
            <input
              style={{ width: '100%' }}
              type='text'
              name='quote'
              id='quote'
              placeholder='Please enter your quote'
              value={text}
              onChange={event => setText(event.target.value)}
            />
          </div>

          <input type='submit' className='btn btn-primary' value='Add' />
        </div>
      </form>
    </div>
  );
};

export default AddQuote;
