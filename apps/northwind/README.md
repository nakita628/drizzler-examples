# northwind

The Northwind Traders schema (PostgreSQL) from Drizzle's own ORM benchmarks.

- Source: [drizzle-team/drizzle-northwind-benchmarks-pg `src/drizzle/schema.ts`](https://github.com/drizzle-team/drizzle-northwind-benchmarks-pg/blob/c225260a8c75c88e905592a8ff7995940abb4e0e/src/drizzle/schema.ts)
- Dialect: PostgreSQL
- Covers: a self-referencing foreign key declared with `foreignKey()` in the legacy object-style extra config, `date` / `doublePrecision` columns, v1 `relations()`

## Changes from upstream

- `relations` is imported from `drizzle-orm/_relations` instead of `drizzle-orm`, because drizzle-orm 1.0 moved the v1 relational API there.

## Generate

```bash
pnpm generate
```

The output is written to [`docs/`](docs/): `README.md`, `er.svg`, `er.png`, `er-dark.png` and `tables/*.svg`.

## Known issues

- The self-reference `employees.recipient_id → employees.id` is missing from the ER diagram, and the table docs link it to `table.id` (`#table-table`). drizzler reads `foreignColumns: [table.id]` as a table named after the callback parameter `table`. drizzle-kit gets the constraint right in the generated SQL.
