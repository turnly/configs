#!/bin/bash

LC_ALL=C

check_git_branch_name() {
  local DEFAULT_IFS IGNORE_BRANCHES branch names regex

  branch=$(git rev-parse --abbrev-ref HEAD | awk '{print tolower($0)}')
  names=(
    "develop"
    "main"
    "stage"
    "staging"
    "production"
    "latest"
    "build"
    "chore"
    "ci"
    "docs"
    "feat"
    "fix"
    "perf"
    "refactor"
    "style"
    "test"
    "release"
    "wip"
    "hotfix"
    "improvement"
    "bugfix"
    "bug"
    "feature"
    "improve"
    "enhancement"
    "enhance"
    "bugfixes"
  )

  IGNORE_BRANCHES=(
    "develop"
    "main"
    "stage"
    "staging"
    "production"
    "latest"
  )

  DEFAULT_IFS=$IFS

  IFS="|"

  regex="(${names[*]})"

  info "Checking if your branch name matches the naming rules..."

  if [[ ! $branch =~ $regex ]]; then

    info "Use one of these conventional commit prefixes:"

    for name in "${names[@]}"; do
      [[ "${IGNORE_BRANCHES[*]}" =~ $name ]] && continue

      echo "   * $name"
    done

    line

    warning "Oops! Your branch '$branch' doesn't seem to comply with the naming rules."

    info "You can use this example to create a new branch:"
    line

    info "git checkout -b feat/$branch"
    info "git checkout -b docs/$branch"
    info "git checkout -b ci/$branch"
    info "git checkout -b hotfix/$branch"

    error "Unable to continue. Exiting..."
  fi

  info "$branch - LGTM! ✅ "

  IFS=$DEFAULT_IFS
}
