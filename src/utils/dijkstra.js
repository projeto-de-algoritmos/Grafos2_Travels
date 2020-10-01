import { buildGraph } from './buildGraph';
import { PriorityQueue } from './priorityQueue';


// function that returns the minimum cost and path to reach Finish
const dijkstra = (airports, start, end) => {

    const graph = buildGraph(airports);

    let dist = {};

    airports.forEach(airport => {
        dist[airport['Airport ID']] = Infinity;
    })


    var priorityQueue = new PriorityQueue(); 
    priorityQueue.enqueue(start, 0); 
    dist[start] = 0;

    while(!priorityQueue.isEmpty()) {
        //console.log(priorityQueue.front()); 
        //console.log(priorityQueue.front().element);
        
        let u = priorityQueue.front().element;

        priorityQueue.dequeue();
        if(u && graph) {
            // Ou, usando array extras
            Object.entries(graph[u]).forEach(([key, value]) => {
                //console.log(key + ' ' + value);

                let v = key;
                let w = value;

                if(dist[v] > dist[u] + w) {
                    dist[v] = dist[u] + w;
                    priorityQueue.enqueue(v, dist[v]);
                }
            });
        }
    }

    console.log(dist[end]);

};

export default dijkstra;
export { dijkstra };