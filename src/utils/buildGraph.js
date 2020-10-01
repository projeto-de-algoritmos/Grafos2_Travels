const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x1 - x2), 2) +((y1 - y2), 2));
}

const hashAirports = (airports) => {
    let hashAirport = {};

    airports.forEach(airport => {
        hashAirport[airport['Airport ID']] = {
            ...airport
        }
    });

    return hashAirport;
};

const buildGraph = (airports) => {
    let graph = {};
    let hashAirport = hashAirports(airports);
 
    if(hashAirport[1]) {
        airports.forEach(airport => {
            airport['destinations'].forEach(destination => {
                if(hashAirport[1]) {
                    graph[airport['Airport ID']] = {
                        ...graph[airport['Airport ID']],
                        [destination]: distance(
                            hashAirport[destination]?hashAirport[destination]['Latitude']:0,
                            hashAirport[destination]?hashAirport[destination]['Longitude']: 0,
                            airport['Latitude'],
                            airport['Longitude'],
                        )
                    }
                }
            });
        });
    }
    return graph;
}

export default buildGraph;
export { buildGraph, hashAirports };