# backend

## Project setup
```
npm install
```

## Config database
```
Create a free cluster on https://www.mongodb.com/ and a admin user
```

```
Rename the file .env.example to .env
And write your MongoDb Url in environment variable DB_URL 
```
```
Now If you want use your front app on local you can exit this folder and clone my other repository and follow the instructions in README.md 
https://github.com/Yacinedeveloppeur/badge-reader-frontend.git
```
```
After dont forget to change the origin value in corsOptions in app.js. Replace https://benevolent-puffpuff-085317.netlify.app with http://localhost:8080
```
### Compiles and reloads for development
```
npm run prod
```

### Compiles and minifies for production
