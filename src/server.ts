import 'reflect-metadata';
import  Express, { NextFunction }  from 'express';
import 'express-async-errors';
import routes from './routes/router';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { createConnection } from './dataBase';
import { Request, Response } from "express";
import '@shared/container/container';
import { AppError } from '@errors/AppError';

createConnection();
const app = Express();

app.use(Express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction ) => {
  if (error instanceof AppError) {

    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`,
  });
});

app.listen(8080, () => {
  console.log('AlugaCar - Server is running');
});

