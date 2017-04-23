# typescriptTrainings / tsjr / TypeScript JumpAndRun

# NodeJS 
as seen in: https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html

# TypeScript + NodeJs

1. install NodeJs
1.1 install NodeJs
1.1 'npm install -g typescript'
1.2 'npm install ts-node'
1.2 'npm install nodemon'

# NodeJs Setup
2. 'npm install' in root project folder
2.1 create package.json in root folder

```json
{
    "name": "tsctest",
    "version": "1.0.0",
    "description": "description xx",
    "main": "./built/Main.js",
    "types": "./built/Main.js",
    "scripts": {
        "start": "npm run build:live",
        "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./src/Main.ts"
    },
    "devDependencies": {
        "@types/node": "^7.0.13",
        "nodemon": "^1.11.0",
        "ts-node": "^3.0.2",
        "typescript": "^2.2.2"
    },
    "author": "Luca N",
    "license": "xxxx"
}
```
# TypeScript Setup
3. 'npm start' to run nodejs local server

3.1 create tsconfig.json in root folder

```json
{
    "compileOnSave": true,
    "compilerOptions": {
        "outDir": "./built",
        "target": "es2017",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "declaration": true,
        "typeRoots": ["node_modules/@types"]
    },
    "include": [
        "./src/**/*"
    ],
    "exclude": [
        "node_modules",
        ".npm"
    ]
}
```
