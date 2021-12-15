FROM node:14

EXPOSE 3000

WORKDIR ./app

COPY . .

RUN yarn install

CMD yarn start