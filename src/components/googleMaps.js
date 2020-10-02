
import React, { useState } from 'react';
import { 
    withScriptjs, 
    withGoogleMap, 
    GoogleMap, 
    Marker, 
    InfoWindow, 
    Polyline } 
from "react-google-maps";
import startIcon from '../static/startIcon.png';
import middleIcon from '../static/middleIcon.png';
import endIcon from '../static/endIcon.png';

const Map = (props) => {

    const { itinerary } = props;
    const [selectedAirport, setSelectedAirport] = useState(null);

    console.log(selectedAirport);

    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: parseFloat(itinerary[0].Latitude), lng: parseFloat(itinerary[0].Longitude) }}
        >
            <Polyline
                path={itinerary.map(local => { return  { lat: parseFloat(local.Latitude), lng: parseFloat(local.Longitude) } })}
                geodesic={true}
                options={{
                    strokeColor: "#000000",
                    strokeOpacity: 0.75,
                    strokeWeight: 2,
                    
                }}
            />
            {
                itinerary.map((local, index) => (
                    <Marker 
                        key={local.ICAO} 
                        onClick={() => setSelectedAirport(local)}
                        icon={{
                            url: index === 0? startIcon: (index === itinerary.length -1? endIcon:middleIcon),
                            scaledSize: index === 0? 
                                new window.google.maps.Size(30, 30): (index === itinerary.length -1? 
                                    new window.google.maps.Size(30, 30):new window.google.maps.Size(20, 20))
                        }}
                        position={{ lat: parseFloat(local.Latitude), lng: parseFloat(local.Longitude) }} />
                ))
            }

            {
                selectedAirport? (
                    <InfoWindow
                        position={{ lat: parseFloat(selectedAirport.Latitude), lng: parseFloat(selectedAirport.Longitude) }}
                        onCloseClick={() => setSelectedAirport(null)}
                    >
                        <h5>{selectedAirport.Name}</h5>
                    </InfoWindow>
                ) : (null)
            }
        </GoogleMap>
    );
}
 
const Wrapped = withScriptjs(withGoogleMap((Map)));

const WrappedMap = ({ itinerary }) => {
    return (
        <div style={{ width: '100%', height: '500px' }}> 
            <Wrapped
                itinerary={itinerary}
                isMarkerShown={true}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

export default WrappedMap;
export { WrappedMap };
