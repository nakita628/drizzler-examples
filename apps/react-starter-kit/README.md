# react-starter-kit

The PostgreSQL schema from [kriasoft/react-starter-kit](https://github.com/kriasoft/react-starter-kit), the React starter for Cloudflare Workers with Better Auth, organizations, passkeys and Stripe subscriptions.

- Source: [kriasoft/react-starter-kit `db/schema`](https://github.com/kriasoft/react-starter-kit/tree/dbdb0d4991bbaae1671ff62180089f2733dd406a/db/schema) (MIT)
- Dialect: PostgreSQL
- Covers: `casing: "snake_case"` with columns declared without an explicit SQL name (`text()`, `boolean()`), composite `unique()`, named indexes, `onDelete: "cascade"`, `timestamp({ withTimezone: true })`, `$defaultFn` / `$onUpdate`, a schema split across files and re-exported from a barrel

## Changes from upstream

- `relations` is imported from `drizzle-orm/_relations` instead of `drizzle-orm`, because drizzle-orm 1.0 moved the v1 relational API there.
- Each file that called `pgTable` now does `const pgTable = snakeCase.table`. drizzle-kit 1.0 dropped `casing` from `defineConfig` (the only `casing` left is `introspect.casing`), and drizzle-orm 1.0 applies snake_case through `snakeCase.table` from `drizzle-orm/pg-core`. The column declarations are otherwise unchanged.
- `drizzle.config.ts` keeps the upstream dialect and points `schema` at the barrel `./db/schema/index.ts`. The dotenv / `DATABASE_URL` wiring is left out; drizzler does not connect.
- `@paralleldrive/cuid2` is installed so `db/schema/id.ts` loads. The id helpers themselves are unchanged.

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

- DBML, Mermaid and the ER diagram name columns by their TypeScript keys (`emailVerified`, `credentialID`). The SQL uses the snake_case names (`email_verified`, `credential_id`). This is the repo-wide naming gap, and here it covers almost every column, because the names come from `snakeCase.table` rather than from a string passed to the builder.
- `timestamp({ withTimezone: true })` is `timestamp with time zone` in the SQL and `timestamp` in DBML and Mermaid. DBML's type map has `timestamptz`, but the builder name is `timestamp` and `withTimezone` is not read.
- Every foreign key is `on delete cascade`. The table docs say so. `schema.dbml` refs do not (`Ref session_userId_user_id_fk: session.userId > user.id` has no `[delete: cascade]`).
- `subscription` and `verification` have no `tables/*.svg`. drizzler only writes that diagram for a table that joins another, and neither table has a foreign key. Both tables are in the full ER diagram, the DBML and the table docs.
- The repo-wide DBML gaps show up too: no `not null`, no `[unique]`, no indexes. The SQL and the table docs have the composite uniques (`invitation_org_email_unique`, `member_user_org_unique`, and the others) and the named indexes.
