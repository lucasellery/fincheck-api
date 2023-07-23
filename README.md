# Fincheck API 💰🤑💳

## Description
An API for a personal finances app to manage your incomes and outcomes, and help you to manage your money better

## Installation

```bash
$ yarn install
```

## Environment variables
``` bash
# use your own database url here or my database url when it is in the cloud
$ DATABASE_URL="postgresql://root:root@localhost:5432/fincheck?schema=public"
```

## Running the app 🚀

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test 🌤

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Techs 🛠

- NestJS
- Prisma
- Typescript