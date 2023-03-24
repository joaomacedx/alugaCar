import Express from 'express';
import { categoriesRoutes } from './category.routes';
import { specificationsRoutes } from './specification.routes';

const routes = Express.Router();
routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);


export default routes;
