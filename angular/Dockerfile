FROM node:20-alpine3.20 AS dev

RUN apk update && apk add --no-cache \
    shadow \
    bash \
    chromium

RUN npm install -g @angular/cli@18.0.0

WORKDIR /app

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

EXPOSE 9876

CMD tail -f /dev/null
