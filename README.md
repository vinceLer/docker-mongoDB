<h1 align="center">

🛢️ docker-mongoDB

</h1>

## Dependencies 
- mongodb: 6.20.0
- @types/node: 24.8.1
- ts-node": 10.9.2,
- typescript": 5.9.3

## CLI 

```bash 
git clone https://github.com/vinceLer/docker-mongodb.git
```

```bash 
cd .. 
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

Run this one. Compile Typescript files in Javascript one : 

```bash 
pnpm exec tsc  
```

And execute them with Javascript : 

```bash 
node dist/index.js  
```


- Since `mongodb@4.x` , all TypeScript types are directly integrated in the main package.
- This simplify the development : no need to add a `@types/*` package


## From Scratch 

From the project repository. Open terminal. 

Initialize project using `pnpm`

```bash 
pnpm init 
```

Add Typecscript :

```bash 
pnpm add -D typescript ts-node @types/node
```

Add official MongoDb client for Node.js :

```bash 
pnpm add mongodb
```

Add TypeScript types for the package (useful if TypeScript is used) :

```bash 
pnpm add -D @types/mongodb
```

```bash 
pnpm add -D @types/node
```

```bash 
pnpm exec tsc
```

```bash 
node dist/index.js
```

Then navigate to the `http://localhost:8081/` to access `mongo-express` URL. 

### MongoDB connexion

Connect to MongoDB (by mongo-express)

Open the browser and got to :
http://localhost:8081

Login with :

User : mongoexpressuser

Password : mongoexpresspass