FROM node:19.6.0-alpine3.16 AS build

WORKDIR /code

COPY package.json yarn.lock ./

RUN yarn install --immutable --immutable-cache --check-cache

COPY public ./public

COPY src ./src

COPY . .

CMD ["yarn", "start"]