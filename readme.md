# Typescript

- Superset of Javascript.
- Adds strict and static types.

Installing and Running
`npm install -g typescript`
`tsc main.ts`

### Initializing TypeScript Project

`tsc --init`

`tsconfig.json` file generated.

Compile Code
`tsc`

Watch Mode
`tsc --watch` // re trigger compilation

Installing Packages
`npm init -y`

`package.json`
Just change `"type": "module"`, so that we can use modern import instead of require import.
