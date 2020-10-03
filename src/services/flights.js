import axios from 'axios';

const url = `http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_ACCESS_KEY_AVATION}`;

const flightApi = axios.create('');

export default flightApi;
export { flightApi, url };