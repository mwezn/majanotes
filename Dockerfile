FROM node:12.18.4
RUN mkdir /code
WORKDIR /code
COPY . /code
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]

