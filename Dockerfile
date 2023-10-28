FROM node

ARG DEFAULT_PORT=8080

WORKDIR /infra_triagil 

COPY .. .

RUN npm install

ENV SERVER_PORT=${DEFAULT_PORT}

EXPOSE ${DEFAULT_PORT}

CMD ["npm", "start"]