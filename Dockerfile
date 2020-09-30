FROM node:14.5.0-buster

EXPOSE 3000
WORKDIR /app
COPY ./package.json /app
COPY ./yarn.lock /app
RUN yarn install
COPY . /app
ENTRYPOINT ["tail", "-f", "/dev/null"]
