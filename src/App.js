import React from 'react';
import './App.css';
import Row from './Row';
import Requests from './Requests'

function App() {
  return (
    <div className="App">
     <h1>hey ashish yadav lets build implement netflix today</h1>
     <row Title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <row Title="Trending now" fetchUrl={requests.fetchTrending}/>
     {requests.}
    </div>
  );
}

export default App;
