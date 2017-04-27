# typescriptTrainings / tsjr / TypeScript JumpAndRun

as seen in: https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html

# TypeScript + NodeJs

    1. install NodeJs - https://nodejs.org/en/
    2. 'npm install -g typescript' - https://www.typescriptlang.org/index.html#download-links
    3. 'npm install ts-node' - https://github.com/TypeStrong/ts-node
    4. 'npm install nodemon'
    5. 'npm install @types/node --save-dev'

# NodeJs Setup
    1. 'npm install' in root project folder
    2. create package.json in root folder

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
    1. create tsconfig.json in root folder

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

# Run the whole thing
    1. 'tsc -w -p .' - TypeScript Watcher - auto compiles on save
    2. 'npm start' to run nodejs local server

# Typings - CLI Tool to manage your TypeScript Type Definitions
    0. https://github.com/typings/typings
    1. 'npm install -g typings'
    2. 'typings install debug --save' - in project root

# If issues occur with node or npm
    1. sudo rm -rf /usr/local/lib/node_modules
    2. sudo rm -rf ~/.npm
    3. brew uninstall --force node
    4. brew install node

# Visual Studio Code Extensions
    1. Auto Close Tag // Jun Han
    2. Material Theme // zhuangtongfa
    3. Prettier - JavaScript formatter // Esben Petersen
        3.1 cmd + shift + p -> 'Format Document
    4. vscode-icons //Roberto Huertas
    5. Settings Sync // Shan Khan

# Visual Studio Code settings.json
```json
    {
    "sync.gist": "",
    "sync.lastUpload": "",
    "sync.autoDownload": false,
    "sync.autoUpload": true,
    "sync.lastDownload": "",
    "sync.version": 262,
    "sync.showSummary": true,
    "sync.forceDownload": false,
    "sync.anonymousGist": false,
    "sync.host": "",
    "sync.pathPrefix": "",
    "workbench.colorTheme": "Solarized Dark",
    "editor.fontSize": 12,
    "files.autoSave": "onFocusChange",
    "typescript.tsdk": "/usr/local/lib/node_modules/typescript/lib",
    "typescript.useCodeSnippetsOnMethodSuggest": true,
    "editor.formatOnSave": true
}
```

# Other
    if issues with npm or node occur, try complete reinstall of node and npm
    http://stackoverflow.com/questions/33870520/npm-install-cannot-find-module-semver