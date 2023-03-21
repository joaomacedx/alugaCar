import  Express  from 'express';
import routes from './routes/routes';

const app = Express();

app.use(Express.json());
app.use(routes);

app.listen(8080, () => {
    console.log("server is running");
});

