# midday

The schema of Midday, a business assistant for freelancers: teams, bank accounts, transactions, invoices, the inbox, documents, time tracking, OAuth apps and more. It was pulled from Supabase with `drizzle-kit pull` and has grown by hand since.

- Source: [midday-ai/midday `packages/db/src/schema.ts`](https://github.com/midday-ai/midday/blob/51587319f26a0ffaa9dfccab1920373cb65689b7/packages/db/src/schema.ts) and [`app-config.ts`](https://github.com/midday-ai/midday/blob/51587319f26a0ffaa9dfccab1920373cb65689b7/packages/db/src/app-config.ts) (AGPL-3.0)
- Dialect: PostgreSQL
- Covers: 50 tables in one file, about 40 `pgEnum`s, `customType()` (`numericCasted`, `tsvector`), `vector({ dimensions })`, `generatedAlwaysAs(sql\`...\`)`, `pgPolicy` row-level security, `index().using("gin", ...)` with operator classes, composite primary and foreign keys, a self-referencing foreign key, a dotted table name (`auth.users`), and v1 `relations`

## Changes from upstream

- `relations` is imported from `drizzle-orm/_relations` instead of `drizzle-orm`, because drizzle-orm 1.0 moved the v1 relational API there.
- The check constraint on `auth.users` is written as `check("users_email_change_confirm_status_check", sql\`...\`)`. Upstream returns a plain `{ kind: "check", name, expression }` object from the extra config, which drizzle-orm 0.x ignored and drizzle-orm 1.0 rejects (`Invalid extra config value for table "auth.users"`).
- `generate` skips `er.png` and `er-dark.png` (see the known issues).

## Generate

```bash
pnpm generate
```

The output is written to [`docs/`](docs/):

- [`README.md`](docs/README.md): table docs with the SQL
- [`er.svg`](docs/er.svg) and `tables/*.svg`: ER diagrams
- [`schema.dbml`](docs/schema.dbml): DBML
- [`er.md`](docs/er.md): Mermaid `erDiagram`

## Known issues

- [nakita628/drizzler#35](https://github.com/nakita628/drizzler/issues/35): `drizzler -o docs/er.png` is killed for out of memory. The diagram is 4860 × 20180 and is rasterised at 2×.
- [nakita628/drizzler#36](https://github.com/nakita628/drizzler/issues/36): the `numericCasted(...)` columns have the type `numericCasted` in the docs, the diagrams, the DBML and Mermaid. The SQL says `numeric(10,2)`.
- [nakita628/drizzler#37](https://github.com/nakita628/drizzler/issues/37): `users.id` has a foreign key to itself, written as `Ref: users.id - users.id`, so `pnpm check:dbml` fails with `Two endpoints are the same`.
- [nakita628/drizzler#33](https://github.com/nakita628/drizzler/issues/33): the composite foreign keys (for example `transactions (team_id, category_slug)` → `transaction_categories (team_id, slug)`) are missing from the DBML, Mermaid and the diagrams.
