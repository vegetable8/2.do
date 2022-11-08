const instance = axios.create({
    baseURL: 'https://127.0.0.1:8000/',
    timeout: 1000,
  });


const api = axios.create({
    baseURL: 'http://localhost:8000',
//     headers: {
//         "Access-Control-Allow-Origin": "*",
// }
 });


function makeRequest2() {
    api.get('/ping').then(response => {
        document.getElementById('response').innerHTML = response.data;
        console.log(response);
    });
}

// axios make request and replace html content
function makeRequest() {
    return axios({
        method: "get",
        url: "/ping",
    }).then(function (response) {
        document.getElementById('response').innerHTML = response.data;
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}