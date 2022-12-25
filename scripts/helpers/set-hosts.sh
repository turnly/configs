#!/bin/bash

function set_hosts() {
  HOSTS=("$@")

  [[ -z "$*" ]] && error "Oops! No hosts provided"

  HOSTS_FILE="/etc/hosts"

  [[ "$OS" == "WINDOWS" ]] && HOSTS_FILE="C:\Windows\System32\drivers\etc\hosts"

  [[ ! -f $HOSTS_FILE ]] && error "The hosts file doesn't exist. Please try again."

  CURRENT_HOSTS=$(cat $HOSTS_FILE)

  if [[ ! -w $HOSTS_FILE || ! -r $HOSTS_FILE ]]; then
    id=$(id -u)
    gid=$(id -g)

    info "Choosing the correct permissions for the hosts file... 🔧 "

    info "Please type your password if necessary."

    if [[ "$OS" == "WINDOWS" ]]; then
      chown -R "$id":"$gid" "$HOSTS_FILE"
    else
      sudo chown -R "$id":"$gid" "$HOSTS_FILE"
    fi

    info "Choosing the correct permissions for the hosts file... DONE ✅ "
  fi

  if [[ ! -w $HOSTS_FILE ]]; then
    error "The hosts file doesn't have the correct permissions. Please try again."
  fi

  for host in "${HOSTS[@]}"; do
    if [[ $CURRENT_HOSTS != *"$host"* ]] &>/dev/null; then
      info "Adding the host $host to the hosts file... 📡 "

      {
        echo "# ci(devO): Added by Turnly, do not edit here."
        echo "127.0.0.1 $host"
        echo "::1 $host"
      } >>$HOSTS_FILE
    fi
  done
}
