import Express from 'express';
import { categoriesRoutes } from './category.router';
import { specificationsRoutes } from './specification.router';
import { usersRoutes } from './user.router';


const routes = Express.Router();
routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/users", usersRoutes);


export default routes;
