FROM node:20
  
WORKDIR /usr/src/app

COPY . .

ENV REDIS_URL=redis://localhost:6379
ENV MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database

RUN npm ci 
  
CMD  ["npm", "run", "start", "--", "--host"]