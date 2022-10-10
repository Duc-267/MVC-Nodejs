import taskRouter from './tasks.js'

function route(request, response) {
    const endpoint = request.url.split('/')[1];
    console.log("🚀 ~ file: index.js ~ line 5 ~ route ~ endpoint", endpoint)
    if (endpoint == 'tasks'){
        taskRouter(request, response)
    } else {
        response.statusCode = 404;
        response.end('404 Not Found');
    }
    
}

export default route