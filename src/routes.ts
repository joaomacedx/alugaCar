import Express from 'express';


const routes = Express.Router();

routes.get('/', (request, response)=>{
   response.send({message: "Hello world!"});
});

export default routes;