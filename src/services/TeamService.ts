import Pokemon from "../models/Pokemon";
import Team from "../models/Team";
import TeamGroup from "../models/TeamGroup";
import TeamRepository from "../repositories/TeamRepository";
import PokemonService from "./PokemonService";

interface IRequest 
{
  user: string;
  team: string[];
}

export default class 
{ 
  private _repository = new TeamRepository();
  private _pokemonService = new PokemonService();

  public async create({user, team}: IRequest)
  {

    const pokemons = [] as Pokemon[];

    for (const pokemonName of team) 
    {
      const pokemon = await this._pokemonService.findByName(pokemonName);
      pokemons.push(pokemon);
    }


    return await this._repository.saveTeam({ owner: user, pokemons });
  }

  public async findAll()
  {
    return await this._repository.findAll();
  }

  public async findById(id: string)
  {
    return this._repository.findById(id);
  }

}