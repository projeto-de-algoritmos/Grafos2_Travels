import React, { useEffect, useState } from 'react'

// Api
import { airportApi, url } from '../../services/airports';

// Style
import { Form, FormGroup, Button, Input, Col, Row, Label } from 'reactstrap';
import './styles.css';

const Search = () => {
  
    const [airports, setAirports] = useState([]);

    const fetch = async () => {
        const response = await airportApi.get(url);
        setAirports(response.data);
    }

    useEffect(() => { fetch() }, []);

    console.log(airports);

    return (
        <div className="container">
            <h2 className="font-weight-bold text-center"> Qual o próximo destino? </h2>
            <Form style={{ width: "800px" }}>
                <Row form >
                    <Col md={6}>
                    <FormGroup>
                        <Input type="origin" name="origin" id="origin" placeholder="Origem..." />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Input type="password" name="password" id="examplePassword" placeholder="Destino..." />
                    </FormGroup>
                    </Col>
                </Row>
                <Button color="primary" >Pesquisar</Button>
            </Form>
        </div>
    )
}

export default Search;