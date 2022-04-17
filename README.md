https://dev.to/andreirusu_/create-test-and-deploy-a-single-page-app-with-vue-3-vite-and-pinia-5097

https://github.com/beatfactor/middlemarch

### Create, Test and Deploy a Single Page App with Vue 3 + Vite and Pinia ###

This guide will cover in detail the steps to create a functional example bookstore single page application\
 using Vue 3 and run it using Vite.\
  It also includes details on how to add state management using Pinia (the Vuex successor) and routing using Vue Router.

The core concepts that will be covered are:

- creating a **Vue 3** single page application using **Vite**
- managing routes with **Vue Router**
- managing application state with **Pinia**
- running, building and deploying the app with **Vite**
- writing and running **Vue component tests**
- writing and running automated end-to-end tests with *Nightwatch.js - https://nightwatchjs.org*

For our bookstore app, we’re going to use only two stores:

- the catalog store: a list of available books
- the cart store: books that the user wants to order

**!!!Tests need to be running with executed "npm run dev" process firstly!!!**
i.e.\
run *npm run dev*\
and in separate termimal:\
*npx nightwatch test/component/testBasic.js --env firefox --headless*

We build Vue app, write some component test with Mocha syntax  
Then we write small e2e test  
*npx nightwatch test/e2e/homePageTest.js --env firefox --headless*  
For running tests, DO NOT FORGET to run app!   
For e2e testing, check port for app in test *.js file!

Then add test script to package.json

Finally we add the Github Actions workflow so that our tests can run on every push and every pull request.

You can get it running on your local machine with the usual steps:\
git clone https://github.com/SoullessSoldier/vue-bookstore\
npm install\
npm run dev