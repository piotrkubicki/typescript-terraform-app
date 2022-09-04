FROM node:18.8-alpine3.15

WORKDIR app

COPY tsconfig.json package.json package-lock.json ./

COPY ./src ./src

RUN npm ci

RUN npx tsc

EXPOSE 3000

ENTRYPOINT ["node", "dist/index.js"]