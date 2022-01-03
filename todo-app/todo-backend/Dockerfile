FROM node:16

RUN mkdir -p /usr/src/app && chown node:node /usr/src/app

USER node

WORKDIR /usr/src/app

#--chown=<user>:<group>
COPY --chown=node:node . .

RUN npm ci

ENV DEBUG=playground:*

CMD npm start