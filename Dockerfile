FROM node:12-alpine AS build

WORKDIR /code

COPY package* package-lock.json ./

RUN npm ci --production 

COPY public ./public

COPY src ./src

COPY . .

CMD ["npm","run", "start"]