FROM node:14.15.0

RUN apt-get update

RUN mkdir -p /project
WORKDIR /project

RUN npm i -g pm2

COPY . /project

RUN chmod -R 777 /project

EXPOSE 80

CMD ["pm2-runtime","/project/dist/ci-website/server/main.js"]