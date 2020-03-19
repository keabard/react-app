import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [beers, setBeers] = useState();
  useEffect(() => {
    const abortController = new AbortController();
    const abortSignal = abortController.signal;
    fetch('https://api.punkapi.com/v2/orangina', {signal: abortSignal})
    .then(response => response.json())
    .then(setBeers)
    .catch(err => err)
    return () => abortController.abort();
  }, []);
  return (
    <div className="App">
      {beers?.map(beer => <div key={beer.id}>{beer.name}</div>)}
    </div>
  );
}

export default App;
