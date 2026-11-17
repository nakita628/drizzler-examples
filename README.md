# drizzler-examples

Well-known [Drizzle](https://orm.drizzle.team/) schemas from the wild, run through [drizzler](https://github.com/nakita628/drizzler) to check what it generates: ER diagrams, table docs and SQL.

Each app holds one upstream schema with as few changes as possible, plus the docs drizzler generated from it. Every app's README lists its source, what was changed and any known drizzler issues.

## Examples

| App | Source | Dialect | Known issues |
| --- | --- | --- | --- |
| [northwind](apps/northwind) | drizzle-team/drizzle-northwind-benchmarks-pg | PostgreSQL | — |
| [realworld](apps/realworld) | bedstack/elysia-drizzle-realworld-example | PostgreSQL | — |
| [create-t3-app](apps/create-t3-app) | t3-oss/create-t3-app (NextAuth) | PostgreSQL | — |
| [create-t3-app-sqlite](apps/create-t3-app-sqlite) | t3-oss/create-t3-app (NextAuth) | SQLite | — |
| [create-t3-app-mysql](apps/create-t3-app-mysql) | t3-oss/create-t3-app (NextAuth) | MySQL | — |
| [create-t3-app-better-auth](apps/create-t3-app-better-auth) | t3-oss/create-t3-app (Better Auth) | PostgreSQL | — |
| [react-starter-kit](apps/react-starter-kit) | kriasoft/react-starter-kit | PostgreSQL | — |
| [authjs-drizzle-sqlite](apps/authjs-drizzle-sqlite) | nextauthjs/next-auth (Drizzle adapter) | SQLite | — |
| [vercel-ai-chatbot](apps/vercel-ai-chatbot) | vercel/ai-chatbot | PostgreSQL | — |
| [saas-starter](apps/saas-starter) | nextjs/saas-starter | PostgreSQL | — |
| [midday](apps/midday) | midday-ai/midday | PostgreSQL | — |
| [kan](apps/kan) | kanbn/kan | PostgreSQL | — |
| [karakeep](apps/karakeep) | karakeep-app/karakeep | SQLite | — |
| [dyad](apps/dyad) | dyad-sh/dyad | SQLite | — |
| [zero](apps/zero) | Mail-0/Zero | PostgreSQL | — |
| [dokploy](apps/dokploy) | Dokploy/dokploy | PostgreSQL | — |
| [sim-studio](apps/sim-studio) | simstudioai/sim | PostgreSQL | [#42](https://github.com/nakita628/drizzler/issues/42), [#43](https://github.com/nakita628/drizzler/issues/43) |

## Output

Every app writes the same set of files to `docs/`:

| File | Format |
| --- | --- |
| `README.md` | Table docs, with the DDL and query SQL drizzle-kit and drizzle-orm build |
| `er.svg`, `er.png`, `er-dark.png`, `tables/*.svg` | ER diagrams |
| `schema.dbml` | [DBML](https://dbml.dbdiagram.io/docs/) |
| `er.md` | [Mermaid](https://mermaid.js.org/syntax/entityRelationshipDiagram.html) `erDiagram` (rendered by GitHub) |

`pnpm check:dbml` parses every `schema.dbml` with `@dbml/core`, the parser behind dbdiagram.io.

## Layout

```text
apps/<example>/
  drizzle.config.ts   # dialect and schema path; drizzler reads it
  src/…               # the upstream schema, kept in its original layout
  docs/               # drizzler output (committed)
packages/tsconfig/    # shared tsconfig (base.json)
```

The versions of drizzler, drizzle-orm and drizzle-kit are pinned once in the `catalog` of [`pnpm-workspace.yaml`](pnpm-workspace.yaml).

## Usage

```bash
pnpm install
pnpm generate    # regenerate docs/ for every app
pnpm typecheck   # tsc for every app
pnpm check:dbml  # parse every docs/schema.dbml
```

To regenerate one app, run `pnpm -F @drizzler-examples/northwind generate`.

## Adding an example

1. Copy an existing app under `apps/` and rename it in `package.json`.
2. Put the upstream schema in its original layout and point `schema` in `drizzle.config.ts` at it.
3. Make only the changes it needs to load with drizzle-orm 1.0 (for example `relations` from `drizzle-orm/_relations`), and note them in the app's README.
4. Run `pnpm generate` and record anything drizzler gets wrong under "Known issues".

## License

Each schema keeps the license of its source repository, linked from the app's README. drizzle-team/drizzle-northwind-benchmarks-pg and nextjs/saas-starter do not declare a license.
