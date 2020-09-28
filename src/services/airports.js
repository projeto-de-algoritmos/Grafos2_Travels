import axios from 'axios';

const url = 'https://gist.githubusercontent.com/386er/84a78c9dd226a9395818/raw/dbed7a575d899876bff063a3590081f40816309e/airports.json';

const airportApi = axios.create('');


export default airportApi;
export { airportApi, url };