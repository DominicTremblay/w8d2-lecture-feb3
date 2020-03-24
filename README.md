# Next Steps

# W8D2 - What's Next

## I - Deployment

We can deploy our app using these services:

- Heroku - deploy scheduler api
- CircleCi - run the tests of our app and create a production branch in our github
- Netlify - publish our scheduler client using the production branch

Everytime, we push to our github repo, circleCi and Netlify are going to create a new build, taken for granted that all our tests are passing.

## II - Advanced Features

We've looked into

- React Router

  - React Router allows us to do client side routing and have our single page app behave like a multi-pages app.

- useReducer hook

  - A reducer function allows to centralize how we should update the state of our app
  - It's managing the global state of our app
  - It's more appropriate for more complexe app
