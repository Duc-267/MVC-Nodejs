import http from 'http';
import route from './routes/index.js'
import mongoose from 'mongoose'
import { connectDatabase } from './database/index.js'

//Connect to db
connectDatabase()

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  route(request, response)
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});