# 🎵 🐳 Adventrame 🐳 🎵

[![Netlify Status](https://api.netlify.com/api/v1/badges/5226443b-0551-4c81-891d-9ed389ca6278/deploy-status?branch=)](https://app.netlify.com/sites/adventrame/deploys)

## Introduction
Adventrame is a simple application that allows you to quickly format song lyrics for easy copying and pasting into the ProPresenter software. This saves time and ensures that the lyrics are in the correct format before using them in ProPresenter.

This project uses Docker and Docker Compose to manage a development environment for the Adventrame application. You can use Makefile commands to simplify interactions with Docker and manage various development tasks.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Make](https://www.gnu.org/software/make/)

## Usage

To use the Makefile commands, open a terminal in the project's root directory and run the `make` command followed by the desired target.

### Usage Examples

1. **Display Help:**

   To display help and see the available targets with their descriptions:

    ```sh
    make help
    ```

2. **Start Development Mode:**

   To build, install, and run in development mode:

    ```sh
    make dev
    ```

3. **Build the Docker Image:**

   To build the Docker image:

    ```sh
    make build
    ```

4. **Start Docker Services:**

   To start the Docker services in detached mode (without showing logs):

    ```sh
    make up
    ```

5. **Stop Docker Services:**

   To stop the Docker services and remove orphaned containers:

    ```sh
    make down
    ```

6. **Open a Shell Session in the Angular Container:**

   To open a shell session in the Angular container:

    ```sh
    make sh
    ```
   
## Notes

- Ensure that Docker and Docker Compose are properly installed and configured on your machine.
- Commands should be run from the root directory of the project where the Makefile is located.

## Authors

- Josia RAZAFINJATOVO

## License

- License information, if applicable.
