COLOR_RESET   = \033[0m
COLOR_INFO    = \033[32m
COLOR_COMMENT = \033[33m
PROJECT_NAME = adventrame
DCOMPOSE = docker-compose
COMPOSE_EXEC = $(DCOMPOSE) exec -u ${UID}:${GID} web
CADDY_EXEC = $(DCOMPOSE) exec -u ${UID}:${GID} caddy
DOCKER = docker

.PHONY: build up stop install test watch watch.prod console.caddy console logs

help: ## Show this help
	@printf "${COLOR_COMMENT}Usage:${COLOR_RESET}\n"
	@printf " make [target]\n\n"
	@printf "${COLOR_COMMENT}Available targets:${COLOR_RESET}\n"
	@awk '/^[a-zA-Z\-_0-9\.@]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf " ${COLOR_INFO}%-26s${COLOR_RESET} %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)


## Build, install and run dev mode
dev: up install watch

## Build docker image
build:
	@$(DCOMPOSE) build

## Start the development environment
up: down
	@$(DCOMPOSE) up --build -d

## Stop the development environment
down:
	@$(DCOMPOSE) down --remove-orphans

## Install node packages
install:
	@$(COMPOSE_EXEC) npm install

## Watch dev mode
watch:
	@$(COMPOSE_EXEC) npm run watch

## Watch prod mode
watch.prod:
	@$(COMPOSE_EXEC) npm run watch:prod

## Run unit tests
test:
	@$(COMPOSE_EXEC) npm run test

## Open docker console
console:
	@$(COMPOSE_EXEC) /bin/sh

## Open caddy console container
console.caddy:
	@$(CADDY_EXEC) /bin/sh

## Tail the logs of the running services
logs:
	@$(DCOMPOSE) logs -f

