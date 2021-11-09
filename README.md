# CI-T



GET:
http://127.0.0.1:5000/Activity

POST
http://127.0.0.1:5000/activity

BODY:
{
	"name": "teste3"
}

PUT:
http://127.0.0.1:5000/activity/{ID}

BODY:
{
	"name": "teste",
	"status": true
}

DELETE:
http://127.0.0.1:5000/activity/{ID}


Comands:

1ºINSTALL DEPENDENCY

USED YARN
$ yarn add yarn

USED NPM
$ npm install 


2ºMOGRATE THE DATABASE SQLITE


USED YARN
$ yarn sequelize db:migrate

USED NPM
$ npx sequelize db:migrate

3º RUM
$ node src/server.js


