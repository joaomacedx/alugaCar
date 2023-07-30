import 'reflect-metadata';
import  Express  from 'express';
import routes from './routes/router';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { createConnection } from './dataBase';
import './shared/container/container';

createConnection();
const app = Express();

app.use(Express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.listen(8080, () => {
    console.log("server is running");
});

