# API Triágil

![Prancheta209](https://github.com/Felipepz/API-Triagil/assets/88398389/fc5728a6-ee74-4561-a806-1b654a2fcd93)

# Estruturação do Desafio.

Dada a segunda etapa para a vaga de Infraestrutura da Triágil, foi proposto o desafio de criar uma API para criação de times de Pokemons. Para isso, foi usado o pokeapi.co. 
O usuário consegue gerar o time passando como parâmetro o seu nome e os devidos pokémons de sua equipe. 
A API foi desenvolvida em TypeScript e utilizando um container em Docker para a inicialização do servidor, onde ele escuta na porta 8080. 

# Baixando as dependências.
  - Primeiro: Baixe os arquivos aqui disponíveis para download e os extraia em seu diretório de preferência.
  - Segundo: Se estiver executando o projeto no Windows baixe o Docker no seguinte link: https://www.docker.com/products/docker-desktop/.

    Caso utilize de uma distribuição beseada em Debian utilize do comando:
    ```bash
    sudo apt update
    sudo apt install docker.io 
  - Terceiro: Após tem configurado o docker execute o seguinte comando no diretorio raiz:
    ```bash
    npm install
    npm install typescript
   Esses comandos irão baixar as dependências necessárias para a execução da API.
   
  - Quarto: Inicie o container a partir do seguinte comando:
    ```bash
    docker compose up -d  

  Após esses 4 passos a sua API estara em funcionamento. 
  
# Execução da API.
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

- Exemplo de Output:
  #### Output /api/teams

```json
{
    "1": {
        "owner": "sleao",
        "pokemons": [
            {
                "id": 9,
                "name": "blastoise",
                "weight": 855,
                "height": 16
            },
            {
                "id": 25,
                "name": "pikachu",
                "weight": 60,
                "height": 4
            },
            {
                "id": 6,
                "name": "charizard",
                "weight": 905,
                "height": 17
            },
            {
                "id": 3,
                "name": "venusaur",
                "weight": 1000,
                "height": 20
            },
            {
                "id": 131,
                "name": "lapras",
                "weight": 2200,
                "height": 25
            },
            {
                "id": 149,
                "name": "dragonite",
                "weight": 2100,
                "height": 22
            }
        ]
    },
    "2": {
        "owner": "felipe",
        "pokemons": [
            {
                "id": 4,
                "name": "charmander",
                "weight": 85,
                "height": 6
            },
            {
                "id": 25,
                "name": "pikachu",
                "weight": 60,
                "height": 4
            },
            {
                "id": 6,
                "name": "charizard",
                "weight": 905,
                "height": 17
            },
            {
                "id": 3,
                "name": "venusaur",
                "weight": 1000,
                "height": 20
            },
            {
                "id": 131,
                "name": "lapras",
                "weight": 2200,
                "height": 25
            },
            {
                "id": 149,
                "name": "dragonite",
                "weight": 2100,
                "height": 22
            }
        ]
    }
}
```


Passando para a rota http://localhost:8080/api/teams/id e informando o id do proprietário, é possível ver os times formados a partir do ID.

- Exemplo de Output:
 #### Output /api/teams/{id}

```json
{
    "id": "2",
    "owner": "felipe",
    "pokemons": [
        {
            "id": 4,
            "name": "charmander",
            "weight": 85,
            "height": 6
        },
        {
            "id": 25,
            "name": "pikachu",
            "weight": 60,
            "height": 4
        },
        {
            "id": 6,
            "name": "charizard",
            "weight": 905,
            "height": 17
        },
        {
            "id": 3,
            "name": "venusaur",
            "weight": 1000,
            "height": 20
        },
        {
            "id": 131,
            "name": "lapras",
            "weight": 2200,
            "height": 25
        },
        {
            "id": 149,
            "name": "dragonite",
            "weight": 2100,
            "height": 22
        }
    ]
}
```
# Demonstração da API.

![infra-Triagil (1) (1)](https://github.com/Felipepz/API-Triagil/assets/88398389/9fe7be67-b405-432e-b614-735afdb41618)
