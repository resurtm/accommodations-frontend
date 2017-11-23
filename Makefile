.PHONY: default build clean dev

default:
	@echo "nothing to do"

build:
	./node_modules/.bin/webpack

clean:
	rm -rfv ./dist/*

dev:
	./node_modules/.bin/webpack-dev-server
