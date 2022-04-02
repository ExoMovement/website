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

## Pull Request (PR) Process

1. Initiate a Pull Request for your branch
   a. Go to the [repository](https://github.com/ExoMovement/website)
   b. Find and select the branch dropdown
![By default, the dropdown should say 'main'. It is on the left, above the code files](https://github.com/ExoMovement/website/blob/main/repo-code-tab.png?raw=true)
   c. Select your branch from the list. 
      i. If it does not appear, select view all branches, then find your branch in the in-depth list
      ii. If neither location has your branch, ensure you've pushed your branch to github
   d. Find and select 'Contribute', then 'Open pull request'
![This should be just above the top-right of the code files]((https://github.com/ExoMovement/website/blob/main/repo-code-tab-create-pr.png?raw=true)
   e. On the right side, link any relevant information
      i. If projects/issues are being used, link the project, and include the word `closes #<ISSUE-NUMBER>` in the comment/description
   f. Select 'Create pull request'
   g. Ensure, the integration tests pass, and a reviewer approves your Pull Request
![This should be just above the top-right of the code files]((https://github.com/ExoMovement/website/blob/main/pr-validations.png?raw=true)
   h. Select "Merge pull request"
