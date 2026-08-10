#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
readme="$repo_root/README.md"

total="$(grep -Ec '^- \[[ xX]\] \*\*[0-9]+\.' "$readme" || true)"
done_count="$(grep -Ec '^- \[[xX]\] \*\*[0-9]+\.' "$readme" || true)"
core_total="$(grep -E '^- \[[ xX]\] \*\*[0-9]+\.' "$readme" | grep -c '⭐' || true)"
core_done="$(grep -E '^- \[[xX]\] \*\*[0-9]+\.' "$readme" | grep -c '⭐' || true)"

if [[ "$total" -eq 0 ]]; then
  echo "未在 README.md 中找到题目清单。" >&2
  exit 1
fi

if [[ "$core_total" -eq 0 ]]; then
  echo "未在 README.md 中找到核心题标记。" >&2
  exit 1
fi

percent=$((done_count * 100 / total))
core_percent=$((core_done * 100 / core_total))
printf '核心 45 题进度：%d / %d（%d%%）\n' "$core_done" "$core_total" "$core_percent"
printf 'LeetCode Hot 100 进度：%d / %d（%d%%）\n' "$done_count" "$total" "$percent"
