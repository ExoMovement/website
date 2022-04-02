# Website

This is the [respository](https://github.com/ExoMovement/website) for the Exo-Movement organization. After your branch is review and merged with the main branch, the website should be available [here](https://exomovement.github.io/website/)

## Development Environment

1. Ensure you have [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4

## Development

### Running Locally
1. Run the command: `npm start` or `ng serve`
2. Navigate to [http://localhost:4200/](http://localhost:4200/)
3. When done, CTRL+C to escape terminal

### Testing Locally (before commiting/create a PR)
1. Lint project with command: `npm run lint`
2. Unit Test project with command: `npm run test:ci`
   a. To debug unit tests, run command: `npm run test`
   b. Browser window should open, where detailed information will be available
   c. When done, CTRL+C to escape terminal
3. End-To-End Test project with command: `npm run e2e:cypress:ci`
   a. To debug end-to-end tests, run command: `npm run e2e`
   b. Browswer window should open, where detailed information will be available
   c. When done, CTRL+C to escape terminal

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.