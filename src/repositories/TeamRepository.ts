import Team from '../models/Team';
import fs from 'fs/promises';
import path from 'path';
import TeamGroup from '../models/TeamGroup';
import ApiError from '../helpers/ApiError';

export default class 
{

  private readonly _source = path.resolve('src', 'data', 'team.json');

  public async saveTeam(record: Team)
  {

    const teams = await this.findAll();

    const newKey = `${Object.keys(teams).length + 1}`;

    teams[newKey] = record;

    await fs.writeFile(this._source, JSON.stringify(teams));

    return {id: newKey, ...teams[newKey]};
  }

  public async findAll(): Promise<TeamGroup>
  {
    const json = await fs.readFile(this._source, 'utf-8');
    const teams = JSON.parse(json) as TeamGroup;
    return teams;
  }

  public async findById(id: string) 
  {
    const teams = await this.findAll() as any;


    if (!teams[id]) 
    {
      throw new ApiError('There is not team with this id');
    }

    return {id, ...teams[id]};
    
  }
}