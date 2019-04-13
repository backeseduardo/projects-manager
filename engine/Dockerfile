FROM node:11-alpine

WORKDIR /usr/src

# ENV PORT 3000
# ENV HOST 0.0.0.0

COPY package*.json ./

# RUN npm install --silent --only=production
RUN npm install --silent

COPY . .

EXPOSE 3000

# RUN npm run build