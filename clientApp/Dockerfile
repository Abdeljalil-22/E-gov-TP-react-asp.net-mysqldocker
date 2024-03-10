FROM node:latest
WORKDIR /app

COPY public public
COPY src  src
COPY package.json package.json
# COPY ./package.json .
RUN npm install 
COPY . .
CMD ["npm","run" ,"dev"]