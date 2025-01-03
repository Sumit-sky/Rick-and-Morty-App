FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY tailwind.config.js .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]