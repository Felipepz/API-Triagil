import pokeapiConfig from "../config/pokeapiConfig"
import Pokemon from "../models/Pokemon";
import ApiError from "../helpers/ApiError";

export default class 
{

  public async findByName(pokemonName: string): Promise<Pokemon>
  {
    
    const { url, options } = pokeapiConfig.fetchConfig(pokemonName);
    const request = await fetch(url, options);

    if (!request.ok) 
    {
      throw new ApiError("Sorry, we could not find this Pokémon.");
    }

    const json = <Pokemon> await request.json();
    const { id, name, weight, height } = json;

    return {
      id,
      name, 
      weight,
      height
    }
  
  }

}

