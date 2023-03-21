import Express from 'express';
import { categoriesRoutes } from './category.routes';

const routes = Express.Router();
routes.use(categoriesRoutes);
routes.get('/', (request, response)=> {
   response.send({message: "Hello world!"});
});

export default routes;
