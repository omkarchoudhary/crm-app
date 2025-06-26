Backend URL -- http://localhost:8000/api/leads
Frontend URL --http://localhost:3000/

First create crm-app folder and then inside it create backend folder and then create first laravel project using command in backend then after that add dockerfile file same do with frontend

Command for installation

RUN composer create-project laravel/laravel:^9.0 .(For sepecific version)
RUN npx create-react-app@5.0.1 my-app(For specific version)

Command to build and run all services(before creating project in laravel sometimes it conflicts)
->docker-compose up -d --build 

For timeout issue
->docker-compose run --rm app composer config --global process-timeout 1800

For routes list
->docker-compose exec app php artisan route:list

Command to start and stop all services 
->docker-compose down
->docker-compose up

To run backend manually
->docker-compose exec app php artisan serve --host=0.0.0.0 --port=8000

->docker-compose exec app php artisan route:clear

->docker-compose exec app php artisan config:clear

->docker-compose exec app php artisan cache:clear

Check docker logs 
->docker-compose logs app(Your service name defined in docker-compose.yml)

Database setup

Download anyone pgAdmin or DBeaver and use below cred

Host: localhost

Port: 5432 (or check your docker-compose.yml)

Username: user

Password: as per your .env

Database: crm

DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=crm
DB_USERNAME=crm_user
DB_PASSWORD=crm_pass

To fix driver error in dbever when run postgress

Manual fix in DBeaver:
Open DBeaver.

Go to Database > Driver Manager.

Select PostgreSQL.

Click Edit.

Go to the Libraries tab.

Remove any broken or invalid URLs.

https://repo1.maven.org/maven2/org/postgresql/postgresql/42.7.3/postgresql-42.7.3.jar

Download the .jar from the above link.

Click Add File, select the .jar you downloaded.

Save & Retry your connection.

Check if to stop any port used by another 

docker ps

docker stop <container-id>

fe url http://localhost:3000/ because it created using create react app if created using vite then it will 5173


For docker restart cleanly

docker compose down --volumes
docker compose build --no-cache
docker compose up -d

remove container that was used already
docker rm -f crm-frontend

For go backend container and run commands directly
docker exec -it crm_backend bash

cat .env | grep DB_CONNECTION


Fe setup using vite create fe folder and run below commands 

npm create vite@latest frontend -- --template react
cd frontend
npm install
npm install axios

docker-compose down -v
docker-compose up --build
-v removes volumes so old node_modules volume is deleted and recreated. when you made changes in package.json

clean and rebuild
docker-compose down -v
docker-compose up --build


postman collection of sample api's

{
  "info": {
    "_postman_id": "a1234567-b89c-40e1-aaaa-bbbbccccdddd",
    "name": "CRM Leads API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get All Leads",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:8000/api/leads",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["api", "leads"]
        }
      }
    },
    {
      "name": "Create Lead",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"name\": \"Test Lead\",\n    \"email\": \"lead@example.com\",\n    \"phone\": \"1234567890\"\n}"
        },
        "url": {
          "raw": "http://localhost:8000/api/leads",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["api", "leads"]
        }
      }
    },
    {
      "name": "Get Single Lead",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:8000/api/leads/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["api", "leads", "1"]
        }
      }
    },
    {
      "name": "Update Lead",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"name\": \"Updated Lead\",\n    \"email\": \"updated@example.com\",\n    \"phone\": \"9876543210\"\n}"
        },
        "url": {
          "raw": "http://localhost:8000/api/leads/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["api", "leads", "1"]
        }
      }
    },
    {
      "name": "Delete Lead",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:8000/api/leads/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8000",
          "path": ["api", "leads", "1"]
        }
      }
    }
  ]
}
