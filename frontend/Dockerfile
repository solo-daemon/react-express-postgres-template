FROM node:18-alpine
# RUN npm install -g yarn

WORKDIR /frontend

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /frontend/
RUN yarn install 

COPY . .

CMD yarn start

EXPOSE 3000