

// set config for Axios
const api = axios.create({
    baseURL: 'http://localhost:8000',
 });


function makeRequest2() {
    api.get('/ping').then(response => {
        document.getElementById('response').innerHTML = response.data.ping;
        console.log(response.data);
    });
}