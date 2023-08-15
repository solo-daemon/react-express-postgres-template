FROM node:18-alpine
# RUN npm install -g yarn

WORKDIR /backend

COPY ./package.json /backend/
RUN yarn install 

COPY . .

CMD [ "yarn", "dev" ]

EXPOSE 5000
