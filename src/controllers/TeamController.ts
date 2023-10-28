import { Request, Response, NextFunction } from 'express';
import TeamService from '../services/TeamService';
import ApiError from '../helpers/ApiError';

export default class TeamController
{

  private static _service = new TeamService();

  public async index(request: Request, response: Response, next: NextFunction) 
  {
    try 
    {
      const teams = await TeamController._service.findAll();
 
      response.json(teams);
    }
    catch(e) 
    {
      next(e);
    }

  }

  public async create(request: Request, response: Response, next: NextFunction)
  {
    try 
    {
      const team = await TeamController._service.create(request.body);
 
      response.json(team);
    }
    catch(e) 
    {
      next(new ApiError('We could not create this team. Verify the pokemon name, maybe it not exists.'));
    }
  }

  public async find(request: Request, response: Response, next: NextFunction)
  {
    try 
    {
      const team = await TeamController._service.findById(request.params.id);
      response.json(team);
    }
    catch(e) 
    {
      next(e);
    }
  }

}