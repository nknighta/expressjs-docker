FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 8080
RUN npm install
CMD ["node", "index.js"]