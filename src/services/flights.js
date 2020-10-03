import axios from 'axios';

const url = `http://api.aviationstack.com/v1/flights?access_key=8c9289b0f290c08ffd40c8ce693f2d90`;

const flightApi = axios.create('');

export default flightApi;
export { flightApi, url };