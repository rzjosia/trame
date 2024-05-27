# Executables (local)
COMPOSE = docker-compose
DOCKER = docker

# Variables
CURRENT_ID := $(shell id -u):$(shell id -g)

# Executables
COMPOSE_EXEC = $(COMPOSE) exec -u $(CURRENT_ID) web
CADDY_EXEC = $(COMPOSE) exec -u $(CURRENT_ID) caddy

# Misc
.DEFAULT_GOAL := help
.PHONY: dev build up down sh bash sh.caddy logs install watch watch.prod test clean

## —— 🎵 🐳 Adventrame Docker Makefile 🐳 🎵 ———————————————————————————————————
help: ## Outputs this help screen
	@printf "\033[33mUsage:\033[0m\n"
	@printf " make [target]\n\n"
	@printf "\033[33mAvailable targets:\033[0m\n\n"
	@grep -E '(^[a-zA-Z0-9\./_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Docker 🐳 ————————————————————————————————————————————————————————————————
dev: up install watch ## Build, install and run dev mode

build: ## Build  the Docker image
	@$(COMPOSE) build

up: down ## Start the docker hub in detached mode (no logs)
	@$(COMPOSE) up --build -d

down: ## Stop the docker hub
	@$(COMPOSE) down --remove-orphans

sh: ## Connect to the Angular
	@$(COMPOSE_EXEC) /bin/sh

bash: ## Connect to the Angular via bash so up and down arrows go to previous commands
	@$(COMPOSE_EXEC) /bin/bash

sh.caddy: ## Connect to the Caddy container
	@$(CADDY_EXEC) /bin/sh

logs: ## Tail the logs of the running services
	@$(COMPOSE) logs -f

## —— Npm 🧙 ———————————————————————————————————————————————————————————————————
install: ## Install node packages
	@$(COMPOSE_EXEC) npm install

watch: ## Watch dev mode
	@$(COMPOSE_EXEC) npm run watch

watch.prod: ## Watch prod mode
	@$(COMPOSE_EXEC) npm run watch:prod

test: ## Run unit tests pass the parameter "c=" to add options, example: make test c='--browsers ChromiumHeadless'
	@$(eval c ?=)
	@$(COMPOSE_EXEC) npm run test -- $(c)

clean: ## Clean
	@rm -rf ./node_modules
	@rm -rf ./dist
