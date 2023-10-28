import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const routes = Router();

const teamController = new TeamController();

routes.get('/teams', teamController.index);
routes.get('/teams/:id', teamController.find);
routes.post('/teams', teamController.create);

export default routes;