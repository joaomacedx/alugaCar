import Express from 'express';
import { categoriesRoutes } from './category.router';
import { specificationsRoutes } from './specification.router';
import { usersRoutes } from './user.router';
import { authenticateRouter } from './authenticate.router';


const routes = Express.Router();
routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/users", usersRoutes);
routes.use(authenticateRouter)


export default routes;
