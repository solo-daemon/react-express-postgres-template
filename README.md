This is a template for a dockerized web app with hot reloading for ReactJS, ExpressJS, and postgres.

To use it you will need [docker-desktop](https://www.docker.com/products/docker-desktop/) or any suitable setup for running a docker compsoe file.

Setup script

```
git clone https://github.com/solo-daemon/react-express-postgres-template.git
cd react-express-postgres-template
docker compose up
```

Your app is up and running now focus on coding and enjoy the hot-reloading !!!.

PS : had a lot of trouble with this
To connect from terminal to the database for default setup run
```
psql -h localhost -p 8000 -U user db
```

If you not put the database name db here it will try to connect you to the user database.

Also if you want to change the .env settings of database you will have to delete the volume pg_data otherwise the changes will not be reflected in the database server.

Suggestions : 

It is suggested to use an ORM for handling postgres commands cause a layer of abstraction reducess fuck-ups but in turn gives you less options in case it happens. So ! You decide.

Here's an article to follow [artice](https://www.robinwieruch.de/postgres-express-setup-tutorial/#:~:text=To%20connect%20PostgreSQL%20to%20your,convert%20data%20among%20incompatible%20types.)
