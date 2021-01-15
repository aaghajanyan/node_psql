FROM node:12.16.1

RUN mkdir /usr/src/app

WORKDIR /usr/src/app
COPY . .

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install

EXPOSE 8080

CMD ["node", "server.js"]

# docker build -t node-ex .
# docker run --rm -d -p 8080:8080 <img_name>
# docker exec -it <container-id> bash