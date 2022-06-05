#!/usr/bin/env bash

function get_env() {
  local ENV_FILE="$1"
  local ENV_EXAMPLE="$2"

  [[ -z "$ENV_FILE" ]] && ENV_FILE=".env"
  [[ -z "$ENV_EXAMPLE" ]] && ENV_EXAMPLE=".env.example"

  if [[ ! -f $ENV_FILE ]]; then
    info "Copying the environment file... 🔧"

    [[ ! -f $ENV_EXAMPLE ]] && error "The environment file doesn't exist. Please try again."

    cp $ENV_EXAMPLE $ENV_FILE

    info "Copying the environment file... DONE ✅ "
  fi

  if [ -f "$ENV_FILE" ]; then
    set -a

    info "Loading the environment file... 🔧"
    source "$ENV_FILE"
    set +a
  fi

  info "Loading the environment file... DONE ✅ "
}
