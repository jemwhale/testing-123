# Testing, testing, 123

The purpose of this repo is to give you some experience writing tests using the Jest testing library. You can check out [their documentation](https://jestjs.io/docs/getting-started) any time if there's anything you need to know.

## Setting up the project

We haven't included the testing library in this project. In fact, we haven't set up the project at all. Your first challenge is to follow these instructions to get everything set up:

 1. Open a terminal in the root of this repo and run
    ```bash
    npm init
    ```
    This will turn the folder into an npm project, meaning we can install libraries easily. You should see a `node_modules` folder appear along with a `package.json`.
 1. To install Jest, run
    ```bash
    npm install -D jest
    ```
    This downloads and installs Jest, which is the testing library we will be using.
 1. Open `package.json` and find "scripts". You should see a script called "test". Replace the contents of the "test" script with "jest".

You can now run any tests you write by running
```bash
npm run test
```
in the terminal.

## Creating your tests

Make a folder called `tests` in the root of the project. If you want to test a file called `calculator.js` you should create a file called `calculator.test.js` and write your tests in there.

## What next

In the `src` directory, you will find several files. These files contain the model solutions for the exercises you have been doing recently. Your task is to write tests which ensure the correctness of the code.
