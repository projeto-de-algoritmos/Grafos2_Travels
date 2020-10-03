/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalFlights = ({ place, modal, toggle }) => {

    return (
        <div>
        <Modal isOpen={modal} toggle={toggle} className="fasd">
            <ModalHeader toggle={toggle}>
                Vôos de { place.start.City } ({ place.start.Country }) para  ({ place.end.City } { place.end.Country })
            </ModalHeader>
            <ModalBody>
            {
                place.flights.length? (
                    place.flights.map(flight => (
                        <div style={{ alignItems: 'center', textAlign: 'center' }} >
                            <h3> Compahia Aérea: {flight.airline.name} </h3>
                            <p> Data do Vôo: {new Date(flight.flight_date).toLocaleString('pt-br')} </p>
                            <p> Aeroporto de origem: {flight.departure.airport} </p>
                            <p> Aeroporto de destino: {flight.arrival.airport} </p>
                            <Button  disabled={true} color="info" > Passagens indisponíveis </Button>
                            <br/><br/><br/>
                        </div>
                    ))
                ):(
                    <p style={{ color: 'red', fontWeight: 'bold' }}> Não há vôos marcados no momento </p>
                )
            }
            </ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
}

export default ModalFlights;
export { ModalFlights };