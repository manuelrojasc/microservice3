FROM node:stretch-slim

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 6000

CMD ["npm" , "start"]