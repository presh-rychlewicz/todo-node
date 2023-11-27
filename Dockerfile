FROM node:19-alpine

COPY package.json /app/
COPY db.json /app/
COPY dist /app/dist

WORKDIR /app

RUN npm install

CMD ["node","dist/server.js"]