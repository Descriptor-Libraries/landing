FROM node:alpine as react-build

COPY ./descriptor-libraries-landing /app

WORKDIR /app


RUN npm install && \
    npm run build && \
    npm cache clean --force
