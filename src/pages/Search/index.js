import React, { useEffect, useState } from 'react'

// Api
import { airportApi, url } from '../../services/airports';

// Utils
import { buildGraph } from '../../utils/buildGraph';

// Style
import { Form, FormGroup, Button, Input, Col, Row, Label } from 'reactstrap';
import './styles.css';

const Search = () => {
  
    const [airports, setAirports] = useState([]);
    const [origin, setOrigin] = useState({});
    const [destiny, setDestiny] = useState({});

    const fetch = async () => {
        const response = await airportApi.get(url);
        setAirports(response.data);
    }

    useEffect(() => { fetch() }, []);

    let graph = buildGraph(airports);

    return (
        <div className="container">
            <h2 className="font-weight-bold text-center"> Qual o próximo destino? </h2>
            <Form style={{ width: "800px" }}>
                <Row form >
                    <Col md={6}>
                    <FormGroup>
                        <Input onChange={(event) => setOrigin(event.target.value)} value={origin} type="select" name="origin" id="exampleSelect" placeholder="Origem..." >
                            {
                                airports.length && airports.map(airport => 
                                    (
                                        <option key={airport['Airport ID']} value={airport['City']}>
                                            {`${airport['City']} (${ airport['Country']})`}
                                        </option>
                                    )
                                )
                            }
                        </Input>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Input value={destiny} type="select" name="select" id="exampleSelect" placeholder="Destino..." >
                            {
                                airports.length && airports.map(airport => 
                                    (
                                        <option key={airport['Airport ID']} value={airport}>
                                            {`${airport['City']} (${ airport['Country']})`}
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
    )
}

export default Search;