FROM node:16-buster

ADD . /usr/src/node/server/

WORKDIR /usr/src/node/server/

CMD [ "sh", "-c", "yarn start" ]