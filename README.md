# drizzler-examples

Well-known [Drizzle](https://orm.drizzle.team/) schemas from the wild, run through [drizzler](https://github.com/nakita628/drizzler) to check what it generates: ER diagrams, table docs and SQL.

Each app holds one upstream schema with as few changes as possible, plus the docs drizzler generated from it. Every app's README lists its source, what was changed and any known drizzler issues.

## Examples

| App | Source | Dialect | Known issues |
| --- | --- | --- | --- |
| [northwind](apps/northwind) | drizzle-team/drizzle-northwind-benchmarks-pg | PostgreSQL | self-FK in object-style extra config |
| [realworld](apps/realworld) | bedstack/elysia-drizzle-realworld-example | PostgreSQL | `pgTable as table` alias |
| [create-t3-app](apps/create-t3-app) | t3-oss/create-t3-app (NextAuth) | PostgreSQL | type-only import evaluated |
| [create-t3-app-sqlite](apps/create-t3-app-sqlite) | t3-oss/create-t3-app (NextAuth) | SQLite | type-only import evaluated |
| [create-t3-app-mysql](apps/create-t3-app-mysql) | t3-oss/create-t3-app (NextAuth) | MySQL | type-only import evaluated |
| [create-t3-app-better-auth](apps/create-t3-app-better-auth) | t3-oss/create-t3-app (Better Auth) | PostgreSQL | — |

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
```

To regenerate one app, run `pnpm -F @drizzler-examples/northwind generate`.

## Adding an example

1. Copy an existing app under `apps/` and rename it in `package.json`.
2. Put the upstream schema in its original layout and point `schema` in `drizzle.config.ts` at it.
3. Make only the changes it needs to load with drizzle-orm 1.0 (for example `relations` from `drizzle-orm/_relations`), and note them in the app's README.
4. Run `pnpm generate` and record anything drizzler gets wrong under "Known issues".

## License

Each schema keeps the license of its source repository, linked from the app's README. drizzle-team/drizzle-northwind-benchmarks-pg does not declare a license.
