const http = require('http');

// 1. Check Root API
const req = http.get('http://localhost:5000/api', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('GET /api Status:', res.statusCode);
        console.log('Response:', data);
    });
});

req.on('error', (e) => {
    console.error(`Problem with GET request: ${e.message}`);
});

// 2. Check Contact POST
const postData = JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    message: 'Hello from test script!'
});

const postOptions = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/contact',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const postReq = http.request(postOptions, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('\nPOST /api/contact Status:', res.statusCode);
        console.log('Response:', data);
    });
});

postReq.on('error', (e) => {
    console.error(`Problem with POST request: ${e.message}`);
});

postReq.write(postData);
postReq.end();
