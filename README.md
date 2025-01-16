# 20 CI/CD Pipeline with GitHub Actions ![Static Badge](https://img.shields.io/badge/license-MIT-blue)

## Description 

This document outlines the CI/CD pipeline setup using GitHub Actions to ensure quality and automated deployments for a fullstack application. The pipeline integrates Cypress testing and deployment to Render, following best practices for branching and feature integration.


## Table Contents
- [User Story](#user-story)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Feature](#feature)
- [Project Setup](#project-setup)
- [Tests](#tests) 
- [Screenshots](#screenshots)
- [Questions](#questions)
- [Credits](#credits)
- [Walkthrough Video](#walkthrough-video)
- [Deployed Link](#deployed-link)

## User Story 

```md
AS A developer looking to integrate a pipeline in a codebase for continuous integration and deployment, 
I WANT to create a GitHub Action that will follow best practices by running test cases when a Pull Request is made to the develop branch
SO THAT I can ensure that all code integrations are clean and pass the proper requirements.

AS A developer looking to deploy the application automatically to Render when code is merged from develop to main,
I WANT to create a GitHub Action that will run when the code is merged to main and automatically deploys to Render
SO THAT the application is constantly updated when major releases are made to the main branch.
```

## Installation
- Fork remote Repository and clone to Local
- npm install
- npm run build
- npm run seed
- npm npm develop
- npm run test:component
 

## Usage
- N/A

## Project Setup

- Repository Structure:

    - Create a repository with two main branches:

        - main branch: For production-ready code.

        - develop branch: For staging and testing merged feature branches.

- Use feature branches for new development tasks, which are merged into develop via pull requests.

- Render Deployment:

        - Deploy the application to Render and connect it to MongoDB Atlas if required.

        - In Render settings, disable Auto-Deploy and copy the Deploy Hook URL.

- GitHub Secrets:

        - Navigate to your repository settings and add the following secrets:

        - RENDER_DEPLOY_HOOK_URL: The deployment hook URL from Render.

 
## Feature
- N/A

## License
[MIT License](https://opensource.org/license/mit)

## Tests
- N/A

## Screenshots
- ![Screenshot1](./screenshots/Screenshot%202025-01-15%20at%203.24.54%20PM.png)
- ![Screenshot2](./screenshots/Screenshot%202025-01-15%20at%203.25.11%20PM.png)
- ![Screenshot3](./screenshots/Screenshot%202025-01-15%20at%203.25.31%20PM.png)
- ![Screenshot4](./screenshots/Screenshot%202025-01-15%20at%203.28.27%20PM.png)

## Walkthrough Video
- N/A

## Deployed Link
- [Deployed Link](https://egy-actions.onrender.com)

## Questions
- [Github Profile](https://github.com/mwahba624/EGY-Actions)

## Credits
- N/A

