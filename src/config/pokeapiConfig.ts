
export default {
  fetchConfig: (name: string) => ({
    url: `https://pokeapi.co/api/v2/pokemon/${name}`,
    options: {
      method: 'GET',
    }
  }),
}