FROM node:alpine AS development

ENV NODE_ENV development
WORKDIR /react-app
COPY ./package.json ./package-lock.json /react-app/

RUN npm install

COPY . .

CMD ["node", "index.js"]
