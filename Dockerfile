FROM node:20-alpine


WORKDIR /code

COPY package.json ./
COPY pnpm-lock.yaml ./

# Production use node instead of root
# USER node
RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm build


EXPOSE 443

CMD [ "pnpm", "start" ]