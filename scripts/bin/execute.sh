#!/bin/bash

COMMAND_LOGS="devo.log"

function exec_command() {
  local COMMAND="$1"

  if [ -n "$VERBOSE" ]; then
    eval "$COMMAND"
  else
    eval "$COMMAND" >>$COMMAND_LOGS 2>&1
  fi
}

function execute() {
  [[ -z "$*" ]] && error "No commands provided"

  [[ -f $COMMAND_LOGS ]] && rm -rf $COMMAND_LOGS

  for command in "$@"; do
    info "Executing command: $command... 🏁 "

    if ! exec_command "$command"; then
      warning "Failed to execute command: '$command'"

      if [ -f $COMMAND_LOGS ]; then
        line

        warning "Command output: 👀 "
        warning " -------------------------------------------------- "
        warning "$(cat $COMMAND_LOGS)"
        warning " -------------------------------------------------- "

        line
      fi

      error "Unable to continue. Exiting... ⭕ "
    else
      info "Successfully executed command ✅ "
    fi
  done
}
