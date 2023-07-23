FROM node:20.3.1-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

#COPY ../server.sh /app

RUN ls -la

CMD ["./server.sh"]