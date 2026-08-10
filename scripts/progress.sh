#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
readme="$repo_root/README.md"

total="$(grep -Ec '^- \[[ xX]\] \*\*[0-9]+\.' "$readme" || true)"
done_count="$(grep -Ec '^- \[[xX]\] \*\*[0-9]+\.' "$readme" || true)"

if [[ "$total" -eq 0 ]]; then
  echo "未在 README.md 中找到题目清单。" >&2
  exit 1
fi

percent=$((done_count * 100 / total))
printf 'LeetCode Hot 100 进度：%d / %d（%d%%）\n' "$done_count" "$total" "$percent"
