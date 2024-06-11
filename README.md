# 127-zbir

## Overview

**127-zbir** is a modern web application built with React and Vite, providing a fast and responsive user experience. This project includes features such as CSS normalization, modular SCSS styling, and linting for maintaining code quality.

## Table of Contents

- [127-zbir](#127-zbir)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Development](#development)
  - [Code Style](#code-style)
    - [SCSS and Styling](#scss-and-styling)
    - [Git Workflow](#git-workflow)
  - [Building](#building)

## Features

- **Modern Normalize**: Standardizes browser default styling with [modern-normalize](https://github.com/sindresorhus/modern-normalize).
- **React**: Built with [React 18](https://reactjs.org/) for a modern, declarative UI.
- **SCSS Support**: Styles are written in SCSS for better modularization and maintainability.
- **Vite**: Utilizes [Vite](https://vitejs.dev/) for fast development and build processes.
- **ESLint**: Ensures code quality with [ESLint](https://eslint.org/) and plugins for React.

## Getting Started

To start working with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/baza-trainee/127-zbir
   cd 127-zbir
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   This will start the Vite development server and open the app in your default browser.

## Development

- **Run the development server**:

  ```bash
  npm run dev
  ```

  This will start a local server at `http://localhost:3000`.

## Code Style

### SCSS and Styling

- **Usage of Mixins and Ready-made Components**: Utilize predefined mixins and components, such as styles for titles, to ensure consistency and reuse common patterns.

  ```scss
  /* Example of a mixin */
  @mixin btn_base {
    padding: 12px 16px;
    font-family: $font-family-title;
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    border-radius: 48px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  /* Example usage in a component */
  .btn_primary {
    @include btn_base();
    color: $main-text;
    background-color: $accent;
  }
  ```

- **Component-specific Style Files**: Create a style file named after the component in lowercase, for example, `./details.module.scss`. This helps keep styles modular and related to their respective components.

  ```scss
  /* details.module.scss */
  .details {
    padding: 20px;
    color: $main-text;
  }
  ```

- **Usage of Variables for Colors and Fonts**: Define and use variables for colors and fonts to maintain consistency across the application.

  ```scss
  /* Example of variables */
  $main-text: rgba(0, 0, 0);
  $font-family-text: "e-Ukraine", sans-serif;

  body {
    font-family: $font-family-text;
    color: $main-text;
  }
  ```

### Git Workflow

- **Branch Naming**: Create branches named after the task, making it clear what the branch is for. For example, `feat/task-1/init-project`.

  ```bash
  git checkout -b feat/task-1/init-project
  ```

- **Descriptive Commits**: Write descriptive commit messages. For example, `feat: project init` clearly indicates that the commit is for the initial project setup.

  ```bash
  git commit -m "feat: project init"
  ```

## Building

To create a production build, run:

```bash
npm run build
```
