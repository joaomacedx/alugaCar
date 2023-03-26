import  Express  from 'express';
import routes from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json'

const app = Express();

app.use(Express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.listen(8080, () => {
    console.log("server is running");
});

