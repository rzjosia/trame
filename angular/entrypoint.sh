#!/bin/bash
set -e

if [ -z "$USER_ID" ] || [ -z "$GROUP_ID" ]; then
  echo "USER_ID and GROUP_ID must be set"
  exit 1
fi

# Create group
if ! getent group "$GROUP_ID" > /dev/null; then
  addgroup -g "$GROUP_ID" hostgroup
fi

# Create user
if ! getent passwd "$USER_ID" > /dev/null 2>&1; then
  adduser -u "$USER_ID" -G "$GROUP_ID" -s /bin/sh -D hostuser
fi

chown -hR "$USER_ID":"$GROUP_ID" /app

exec "$@"
