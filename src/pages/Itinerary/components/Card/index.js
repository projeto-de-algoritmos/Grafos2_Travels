import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

// Components
import { ModalFlights } from '../Modal';

const CardItinerary = ({ place }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
    <div style={{ width: '100%' }} >
      <Card>
        <CardImg style={{ width: '100%', height: '100%' }} src="https://images.unsplash.com/photo-1490430657723-4d607c1503fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle style={{ fontWeight: 'bold' }} > { place.start.City } ({ place.start.Country }) para  ({ place.end.City } { place.end.Country }) </CardTitle>
          <CardSubtitle>Rota dos aeroportos</CardSubtitle>
          <CardText> Voos de  { place.start.Name } para { place.end.Name } </CardText>
          <Button onClick={toggle} color="primary" >Conferir voos</Button>
        </CardBody>
      </Card>

      <ModalFlights place={place} toggle={toggle} modal={modal} />
    </div>
  );
};

export default CardItinerary;
export { CardItinerary };