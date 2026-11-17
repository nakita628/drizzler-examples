# turborepo-elysia

The Drizzle schema of Vercel's Turborepo example `with-nextjs-elysia`: users, roles and the join table between them, with drizzle-orm 1.0 relations.

- Source: [vercel/turborepo `examples/with-nextjs-elysia/packages/contract/src/drizzle`](https://github.com/vercel/turborepo/tree/67484391f9090c51a888221998b042a31a93e49d/examples/with-nextjs-elysia/packages/contract/src/drizzle) (MIT)
- Dialect: PostgreSQL
- Covers: `import * as p from "drizzle-orm/pg-core"` (`p.pgTable`, `p.uuid`), column builders held in constants and reused (`id: idUuid`) or spread through an object (`...Audit`), `defineRelations` with a many-to-many relation `through` a join table, and a relations file next to the tables

## Changes from upstream

- `index.ts`, `table.schema.ts` and `table.relation.ts` are copied as they are.
- `drizzle.config.ts` lists `table.relation.ts` next to `table.schema.ts` in `schema`, so drizzler reads the relations too. It drops `casing: "snake_case"`, which drizzle-kit 1.0 no longer accepts; every column names its SQL column. It also drops the database URL.

## Generate

```bash
pnpm generate
```

The output is written to [`docs/`](docs/):

- [`README.md`](docs/README.md): table docs with the SQL
- [`er.svg`](docs/er.svg), [`er.png`](docs/er.png), [`er-dark.png`](docs/er-dark.png) and `tables/*.svg`: ER diagrams
- [`schema.dbml`](docs/schema.dbml): DBML
- [`er.md`](docs/er.md): Mermaid `erDiagram`

## Known issues

- [nakita628/drizzler#49](https://github.com/nakita628/drizzler/issues/49): `id: idUuid` and the `createdAt` and `updatedAt` spread through `...Audit` are missing from the docs, the diagrams, the DBML and Mermaid, so `sys_user` and `sys_role` have no `id` and `pnpm check:dbml` fails with `Column 'id' does not exist in Table 'public.sys_user'`. The SQL has every column.
