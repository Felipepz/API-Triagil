# API Triágil

![Prancheta209](https://github.com/Felipepz/API-Triagil/assets/88398389/fc5728a6-ee74-4561-a806-1b654a2fcd93)

# Estruturação do Desafio.

Dada a segunda etapa para a vaga de Infraestrutura da Triágil, foi proposto o desafio de criar uma API para criação de times de Pokemons. Para isso, foi usado o pokeapi.co. O usuário consegue gerar o time passando como parâmetro o seu nome e os devidos pokémons de sua equipe. 
- POST : 
Primeiro, é necessário fazer a criação das equipes de pokémons usando o método POST do Postman com a rota http://localhost:8080/api/teams. 
Para isso, é necessário colocar no corpo da criação o proprietário do time e os devidos Pokémons, como no exemplo abaixo.

#### Input
```json
{
  "user": "felipe",
  "team": [
    "charmander",
    "pikachu",
    "charizard",
    "venusaur",
    "lapras",
    "dragonite"
  ]
}
```

Após isso, especifique que o formato é um formato JSON e, com isso, vá em "Send".

- GET :
Usando o método GET do Postman e acessando a rota http://localhost:8080/api/teams, é possível visualizar todos os times de pokémons criados com suas devidas características de pokémons. Nessa visualização, é informado o ID do proprietário do time, o "owner" que seria o proprietário do time, o "weight" que seria o peso dos pokémons escolhidos e o "height" que seria a altura dos pokémons.

Passando para a rota http://localhost:8080/api/teams/id e informando o id do proprietário, é possível ver os times formados a partir do ID.


![infra-Triagil (1) (1)](https://github.com/Felipepz/API-Triagil/assets/88398389/9fe7be67-b405-432e-b614-735afdb41618)
