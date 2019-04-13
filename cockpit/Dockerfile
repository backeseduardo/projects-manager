FROM nginx:1.15-alpine

RUN apk add --update npm

WORKDIR /usr/share/nginx/html

COPY package*.json ./

COPY . .

# RUN npm install --silent --only=production
RUN npm install --silent

EXPOSE 8080
EXPOSE 80
EXPOSE 443