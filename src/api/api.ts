
export const OPEN_GRAPH_API_KEY = import.meta.env.VITE_APP_OPENGRAPH_PRIVATE_API_KEY || '';

console.log('Open Graph API Key:', OPEN_GRAPH_API_KEY);

//OpenGraphApi 받아오기
export const fetchOpenGraphData = async (url : string) => {
    console.log('Open Graph Data:', url);
    const response = await fetch (
        `https://opengraph.io/api/1.1/site/${encodeURIComponent(url)}?app_id=${OPEN_GRAPH_API_KEY}`
    );
    if(!response.ok){
        throw new Error('Failed to fetch Open Graph data');
    }
    
    return await response.json();
}