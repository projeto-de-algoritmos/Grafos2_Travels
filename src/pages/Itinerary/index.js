import React, { useEffect, useState } from 'react'


// Services
import { flightApi, url } from '../../services/flights';

// Google Maps
import { WrappedMap } from '../../components/googleMaps';

// Components
import { CardItinerary } from './components/Card';

// Reactstrap
import { Spinner } from 'reactstrap';

// Styles
import './styles.css';

const Itinerary = ({ itinerary }) => {

  const [places, setPlaces] = useState([]);

  const fetch = async (start, end) => {
    const res = await flightApi.get(`${url}&dep_icao=${start}&arr_icao=${end}&limit=10`);
    return res.data;
  }

  const getFlights = async () => {

    let p = [];
    for(let i = 0; i < itinerary.length -1; i++) {
      let flight = await fetch(itinerary[i].ICAO, itinerary[i+1].ICAO);
      p.push({ start: itinerary[i], end: itinerary[i+1], flights: flight.data });
    }
    setPlaces(p);
  }

  useEffect(() => {
    getFlights();
  },[]);

  return (
    <div className="container">
        <h1>Escala</h1>
        <br />
        <WrappedMap itinerary={itinerary} />
        <h1> Vôos </h1>
        <div style={{ display: "flex", width: "100%" }}>
          {
            places.length? (
              places.map(place => (
                <div style={{ margin: "2%" }}>
                  <CardItinerary place={place} />
                </div>
              ))
            ): (
              <div style={{ marginTop: '10%', width: '100%' }}>
                <Spinner color="info" style={{ width: '12rem', height: '12rem' }} />{' '}
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Itinerary;
export { Itinerary };