## Start

    $ sudo docker-compose up -d

## Log

    $ sudo docker-compose logs -f
    
## Check the name

    $ sudo docker ps

```
NAMES
postgres_postgres_1
```

## Run into the database

    $ sudo docker exec -it postgres_postgres_1 psql -U postgres
```
create database articles;
\l -- look databases
\c articles -- go into articles
create schema new_schema -- wtf?
create table comments (NAME string); -- new table
\q -- quit
```

## Stop the databse

    $ sudo docker stop postgres_postgres_1
