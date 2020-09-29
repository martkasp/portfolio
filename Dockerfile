FROM node:13-alpine
EXPOSE 3000
WORKDIR /app
COPY ./package.json /app
COPY ./yarn.lock /app
RUN yarn install
COPY . /app
CMD ["dist"]