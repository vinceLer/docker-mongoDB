<h1 align="center">

🛢️ docker-mongoDB

</h1>

## Dependencies 
- mongodb: 6.20.0
- @types/node: 24.8.1
- ts-node": 10.9.2,
- typescript": 5.9.3

## CLI 

Execute command lines below in order to start quickly the MongoDB Docker project :

```bash 
git clone https://github.com/vinceLer/docker-mongodb.git
```

```bash 
cd ./docker-mongodb 
```

```bash 
pnpm install
```

```bash 
docker-compose up -d
```

If the command below, doesn't work : 

```bash 
ts-node src/index.ts
```

Run this one.

Compile Typescript files in Javascript one : 

```bash 
pnpm exec tsc  
```

And execute them with Node : 

```bash 
node dist/index.js  
```


- Since `mongodb@4.x` , all TypeScript types are directly integrated in the main package.
- This simplify the development : no need to add a `@types/*` package


## This project from Scratch 

From the project repository. Open terminal. 

Initialize project using `pnpm` :

```bash 
pnpm init 
```

This will add at the root project, a package.json. 

Then add Typecscript :

```bash 
pnpm add -D typescript ts-node @types/node
```

Add official MongoDb client for Node.js :

```bash 
pnpm add mongodb
```

And add TypeScript types for the package (useful if TypeScript is used) :

```bash 
pnpm add -D @types/mongodb
```

```bash 
pnpm add -D @types/node
```

All of those dependencies will be added to the package.json previously created. 

Implement the `docker-compose.yml` : Can find it to the root project. 

Then run `docker-compose up -d` in the terminal, MongoDB database Docker image (for collections) will be created

Then for the example,

Compile Typescript files :

```bash 
pnpm exec tsc
```

And execute them wiht Node.js, the script mentionned below will generate "Collection" (table) with some data for the example 

```bash 
node dist/index.js
```

 Finally, navigate to the `http://localhost:8081/` to access `mongo-express` URL. 

### MongoDB connexion

Connect to MongoDB (by mongo-express)

Open the browser and got to :
http://localhost:8081

Login with :

User : mongoexpressuser

Password : mongoexpresspass
