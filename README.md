<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

- Author - [Néstor Daniel Gomez](https://www.linkedin.com/in/nestordanielgomez1/)
- Website - [hhttps://portfolio-nestor-gomez.netlify.app/](https://portfolio-nestor-gomez.netlify.app/)
- Github - [@repositories](https://github.com/NestorDanielGomez?tab=repositories)

## Stack Utilizado:

- NestJs | PostgreSql (TypeOrm) | Docker | ServerLess | Github Actions | AWS Lambda | AWS RDS(Postgres) | AWS Api Gateway | GitHub

## Instalación del proyecto.

- Clonar proyecto

```bash
$ npm install
```

- Clonar y renombrar el archivo `.env.template` por `.env`.
- Cambiar las variables de entorno segun ambito de desarrollo. Dentro el archivo .env se detalla que variables utilizar según el caso de uso.
- Levantar la Base de datos:

```bash
$ docker-compose up -d
```

- Correr proyecto:

```bash
$ npm run start:dev
```

- Link de swagger (con la App levantada en modo dev) para ver detalle de los Endpoints:
  ```
  http://localhost:3000/api#/employee/
  ```

#### Llevar la aplicacion hacia AWS.

- Con las credenciales de AWS ingresadas por consola.
  ejecutar:

```bash
 serverless deploy
```

#### DEPLOY EN AWS:

```
https://sqrz84u6tc.execute-api.us-east-1.amazonaws.com/employee
```

- Ejemplo getAll y GetOne desde la app desplegada en aws

  - <img src="/public/getall+getOne.gif" />

- Gateway de Api para manejo de las peticiones.
  <img src="./public/aws-gateway-api.png" />

- Función lambda para ejecutar las peticiones.
- ARN de la función:arn: aws:lambda:us-east-1:703278227903:function:serverless-challenge-service-production-api
  <img src="/public/lambda.png" />

- Nombre de recurso de Amazon (ARN): arn:aws:rds:us-east-1:703278227903:db:db-challenge-instance
  <img src="/public/rds_postgres.png" />

#### CI/CD.

- Deploy de ServerLess sobre los pushes en la rama "main".
  /github/workflows/main.yml

#### TODOS:

- Generar una tabla independiente para el cargo y relacionarla con la tabla de empleados.
- Generar un objeto de configuracion para el manejo de las variables de entorno segun el stage (dev/prod).
- Generar un endpoint "seed" que carge la base de datos local cuando se inicializa el proyecto, para ya tener "empleados" cargados para probar todos los endpoints.
- Paginación y Offset en la peticiones de empleados.
- Dockerizar (multi-stage) la aplicación ya terminada.

#### Testing Unitario:

```
npm run test
```

### GRACIAS

Les agradezco la oportunidad que me dieron de hacer el desafio.
Si me dan la posibilidad de trabajar con ustedes les prometo que no se van a arrepentir.
Por esta oportunidad estoy dispuesto a renunciar a 17 años de antiguedad, comodidad y estabilidad en una empresa.
Voy a hacer todo lo que sea necesario para tener exito.
Saludos
