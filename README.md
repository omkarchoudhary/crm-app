First create crm-app folder and then inside it create backend folder and then create first laravel project using command in backend then after that add dockerfile file same do with frontend
RUN composer create-project laravel/laravel:^9.0 .(For sepecific version)
RUN npx create-react-app@5.0.1 my-app(For specific version)

Single command to start all services (docker-compose up)

run docker-compose up -d --build before creating project in laravel

for timeout issue docker-compose run --rm app composer config --global process-timeout 1800

docker-compose exec app php artisan route:list
docker-compose down
docker-compose exec app php artisan serve --host=0.0.0.0 --port=8000

docker-compose exec app php artisan route:clear
docker-compose exec app php artisan config:clear
docker-compose exec app php artisan cache:clear

check docker logs docker-compose logs app

postman collection 

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


download anyone pgAdmin or DBeaver

and use below cred

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

to fix driver error in dbever when run postgress

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

if to stope any port used by anotehr 
docker ps

docker stop <container-id>

fe url http://localhost:3000/ because it created using create react app if created using vite then it will 5173

JWT setup

composer require tymon/jwt-auth
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
php artisan jwt:secret

docker run --name mysql-temp -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:8

mysql connection error 
Option 2: Add Parameters in JDBC URL
When creating or editing the MySQL connection in DBeaver,

Find the "URL" field, which looks like this:

bash
Copy
Edit
jdbc:mysql://localhost:3306/sample_db
Modify it to:

bash
Copy
Edit
jdbc:mysql://localhost:3306/sample_db?allowPublicKeyRetrieval=true&useSSL=false
docker cp "C:\Users\OMKAR\Downloads\sample.sql" mysql-temp:/sample.sql

docker exec -it mysql-temp mysql -uroot -proot -e "CREATE DATABASE sample_db"
docker exec -i mysql-temp mysql -uroot -proot sample_db < "C:\Users\OMKAR\Downloads\sample.sql"



