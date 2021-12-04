
# Project TO DO CIT

A brief description of what this project does and who it's for


## Installation

Install project with yarn

```bash
  git clone https://github.com/andrenogueiragbi/CI-T-CRUD-NODEJS.git
  cd CI-T-CRUD-NODEJS
  yarn install
```

Install project with npm

```bash
  git clone https://github.com/andrenogueiragbi/CI-T-CRUD-NODEJS.git
  cd CI-T-CRUD-NODEJS
  npm install
```
    
## Do as SQLITE database migrations

Install project with yarn

```bash
  yarn install --save-dev sequelize-cli
  yarn sequelize db:migrate
```

Install project with npm

```bash
  npm install --save-dev sequelize-cli
  npx sequelize db:migrate

```
## Run

Run in development mode with yarn

```bash
  yarn dev
```

Run in development mode 

```bash
  nodejs src/server.js
```


## API Reference

#### Get all items

```http
  GET /Activity
```

#### Update activity

```http
  PUT /Activity/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. activity name |
| `status` | `boolean` | **Required**. activity status |


#### Save activity


```http
  POST /Activity/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. activity name |
|


#### Delete activity


```http
  DELETE /Activity/{id}
```
















## Authors

- [@andrenogueiragbi](https://github.com/andrenogueiragbi)

- [@RonaldoThierre](https://github.com/RonaldoThierre)



