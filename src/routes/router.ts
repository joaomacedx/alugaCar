import Express from 'express';
import { categoriesRoutes } from './category.router';
import { specificationsRoutes } from './specification.router';

const routes = Express.Router();
routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);


export default routes;
