import React, { useEffect, useState } from 'react'

// Api
import { airportApi, url } from '../../services/airports';

// Utils
import { dijkstra } from '../../utils/dijkstra';
import { hashAirports } from '../../utils/buildGraph';

// Style
import { Form, FormGroup, Button, Input, Col, Row, Label } from 'reactstrap';
import './styles.css';

const Search = ({ airportsPath }) => {
  
    const [airports, setAirports] = useState([]);
    const [departure, setDeparture] = useState(0);
    const [arrival, setArrival] = useState(0);

    const fetch = async () => {
        const response = await airportApi.get(url);
        setAirports(response.data);
    }

    useEffect(() => { fetch() }, []);
    
    const handleSubmit = () => {

        if(departure !== -1 && arrival !== -1) {
           const path = dijkstra(airports, departure, arrival);
           airportsPath({ path, hashAirports: hashAirports(airports) });
        }
    }

    return (
        <div className="background">
        <div className="container">
            <h2 className="font-weight-bold text-center"> Qual o próximo destino? </h2>
            <Form onSubmit={(e) =>{
                e.preventDefault();
                handleSubmit();
            }} style={{ width: "100%" }}>
                <Row form >
                    <Col md={6}>
                    <FormGroup>
                        <Input 
                            onChange={(event) => {
                                setDeparture(event.target.value);
                            }} 
                            type="select" 
                            name="departure" 
                            value={departure}
                            id="departure"
                            required={true} 
                            placeholder="Origem..." >
                            {
                                airports.length && airports.map((airport, index) => 
                                    (
                                        <option key={index} value={airport['Airport ID']}>
                                            {` ${airport['Name']} (${airport['City']} - ${ airport['Country']})`}
                                        </option>
                                    )
                                )
                            }
                        </Input>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Input 
                            onChange={(event) => {
                                setArrival(event.target.value);
                            }} 
                            type="select" 
                            name="arrival"
                            required={true} 
                            value={arrival}
                            id="arrival" 
                            placeholder="Origem..." >
                            {
                                airports.length && airports.map((airport, index) => 
                                    (
                                        <option key={index} value={airport['Airport ID']}>
                                            {` ${airport['Name']} (${airport['City']} - ${ airport['Country']})`}
                                        </option>
                                    )
                                )
                            }
                        </Input>
                    </FormGroup>
                    </Col>
                </Row>
                <Button color="primary" >Pesquisar</Button>
            </Form>
        </div>
        </div>
    )
}

export default Search;
export { Search };