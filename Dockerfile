FROM cypress/included:15.14.2

WORKDIR /e2e

COPY package.json package-lock.json ./

RUN npm ci

COPY . .