import React from 'react';

const QuoteList = ({ quotes }) => {
  const quoteList = quotes.map(quote => (
    <li key={quote.id}>{quote.content}</li>
  ));

  return (
    <div>
      <ul>{quoteList}</ul>
    </div>
  );
};

export default QuoteList;
