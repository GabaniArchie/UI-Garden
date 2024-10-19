FROM node:18-alpine AS build

WORKDIR /archie_gabani_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

RUN npm install -g serve

WORKDIR /archie_gabani_ui_garden

COPY --from=build /archie_gabani_ui_garden/dist ./dist

EXPOSE 8083

CMD ["serve", "-s", "dist", "-l", "8083"]