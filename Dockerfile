FROM node:8.10.0-alpine

MAINTAINER kenticny <kenticny@gmail.com>

COPY . /app
WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 9999

CMD [ "npm", "start" ]