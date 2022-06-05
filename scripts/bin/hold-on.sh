#!/bin/bash

function hold_on() {
  [[ -z "$*" ]] && error "No directories provided"

  for container in "$@"; do
    while [ "$(docker ps -f health=healthy | grep "$container")" == "" ]; do
      info "Waiting for $container to be ready ... 🕐 "
      sleep 4
    done
  done
}
