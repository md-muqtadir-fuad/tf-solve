# tf-solve

This project is a React-based application for displaying educational content, specifically questions and answers for university courses.

## Features

*   Displays questions and answers in a clear, organized format.
*   Supports HTML content in questions and answers, allowing for rich text and images.
*   Content is structured into sections (Section A and Section B).
*   Easily extensible by adding new data to the `qa_set` in `src/App.js`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installing

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd tf-solve
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm start
```

This will open the application in your default browser at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

*   `npm start`: Runs the app in development mode.
*   `npm test`: Launches the test runner in interactive watch mode.
*   `npm run build`: Builds the app for production to the `build` folder.
*   `npm run eject`: Removes the single dependency configuration. **Note: this is a one-way operation.**

## Project Structure

*   `src/App.js`: The main component that holds the data and renders the `QA` component.
*   `src/components/QA.jsx`: The component responsible for displaying the questions and answers.
*   `src/assets/qa_img/`: Contains images used in the questions and answers.
*   `public/`: Contains the main HTML file and other static assets.
