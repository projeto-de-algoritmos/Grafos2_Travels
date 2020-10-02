import React, { useState } from 'react'
import { WrappedMap } from '../../components/googleMaps';

// Styles
import './styles.css';

const Itinerary = ({ itinerary }) => {

  return (
    <div className="">
        <WrappedMap itinerary={itinerary} />
    </div>
  )
}

export default Itinerary;
export { Itinerary };