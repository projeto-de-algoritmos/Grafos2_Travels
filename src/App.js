import React, { useState } from 'react';

// Pages
import { Search } from './pages/Search';
import { Itinerary } from './pages/Itinerary';

// Style
import './App.css';

function App() {

  const [itinerary, setItinerary] = useState([]);

  const airportsPath = (data) => {
    const { path, hashAirports } = data;
    let airports = path.map(airport => hashAirports[airport]);
    setItinerary(airports);
  }


  if(itinerary.length) {
    return (
      <div style={{ marginTop: '-240px' }} className="App">
        <Itinerary itinerary={itinerary} />
      </div>
    );
  }

  return (
    <div className="App">
      <Search airportsPath={(data) => airportsPath(data)} />
    </div>
  );
}

export default App;
