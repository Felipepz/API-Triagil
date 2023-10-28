import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import ApiError from './helpers/ApiError';


const server = express();

const SERVER_PORT = process.env.SERVER_PORT ?? 8080;


server.use(express.urlencoded({ extended: true, }));

server.use(express.json());

server.use(cors());

server.use('/api', routes);

server.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  let message = error.message;
  let statusCode = 400;

  if (error instanceof ApiError) 
  {
    statusCode = error.statusCode;
  }

  return response.status(statusCode).json({ status: 'Error', message });

});

server.listen(SERVER_PORT, function () {
  console.log(`The server is open on http://localhost:${SERVER_PORT}`);
});