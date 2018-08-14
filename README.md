# KPSOM Patternlab Test

Follow the instrucation below
## Install pattern lab
1. `npm init -y && npx @pattern-lab/cli -c patternlab init`

> #choose gulp version
> #choose mustche and bootstrap
> #copy .gitignore

2. `npm install`
3. Add below line into `package.json`, `script` block
```diff
    "scripts": {
    + "patternlab": "patternlab"
    },
```

## Run pattern lab
In your terminal, run npm ```run patternlab <command>```, 
> where <command> is a documented method on the CLI, such as `build`, `serve`, or `help`.
`npm patternlab build`
`npm patternlab serve`
`npm patternlab help`