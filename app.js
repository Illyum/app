const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const query = url.parse(request.url, true).query;
    let count = +query.count;

    if (!count || count < 10 || count > 10000) {
        count = 1;
    }

    const hostname = process.env.HOSTNAME;
    const startDate = new Date();

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write(`Server processing the request: ${hostname}\n`);
    response.write(`Start time: ${startDate}\n`);
    
    for (let i = 0; i < count; i++) {
        response.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit, ');
        response.write('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n');
    }

    const endDate = new Date();

    response.write(`End time: ${endDate}\n`);
    response.end();
});

const port = process.env.PORT || 8880;

server.listen(port, () => {
    console.log(`Server listening at port ${port}...\n`);
});

