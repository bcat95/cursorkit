# Cursor Kit Rules

## Naming & Structure
- JS: camelCase for variables/functions; PascalCase for classes/components.
- PHP: snake_case DB fields, StudlyCaps class names, PSR-4 style where applicable.
- SQL: lowercase keywords optional, but keep **consistent**; alias tables (e.g., `orders o`).
- Folders: `assets/`, `js/`, `css/`, `views/`, `api/`, `sql/`, `tests/`.

## JavaScript
- Prefer jQuery for DOM and Ajax in legacy/admin UIs; isolate logic into reusable functions.
- Debounce expensive handlers (keyup, scroll) at 200–300ms.
- Never access DOM repeatedly inside loops; cache selectors.

## PHP
- Validate all inputs (`filter_input`, custom validators).
- Use prepared statements or a safe DB layer; never string-concatenate SQL.
- Centralize config and secrets; keep environment-specific values in `.env`.

## SQL & Data
- Use appropriate indexes for WHERE, JOIN, ORDER BY fields.
- Avoid `LIKE '%term%'` on large tables without fulltext or ngram indexes.
- Separate OLTP vs. analytics workloads where possible.

## Security
- Escape output in HTML (XSS), sanitize filenames, enforce CSRF tokens on forms.
- Rate-limit critical endpoints; log suspicious activity.

## Performance
- Paginate DataTables via server-side when dataset > 5k rows.
- Cache expensive queries; add proper invalidation hooks.

## Docs
- Keep `CHANGELOG.md` updated (Keep a Changelog format).
- Document API contract and example payloads.
