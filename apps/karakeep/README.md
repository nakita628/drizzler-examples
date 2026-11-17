# karakeep

The schema of Karakeep (formerly Hoarder), a self-hosted bookmark manager: users, bookmarks and their links, texts and assets, tags, lists, highlights, feeds, rules, webhooks, backups and more.

- Source: [karakeep-app/karakeep `packages/db/schema.ts`](https://github.com/karakeep-app/karakeep/blob/bcc4b90a2ae89f4b96ec23ce395ee9d3d1df6a72/packages/db/schema.ts) (AGPL-3.0)
- Dialect: SQLite
- Covers: 34 tables in one file, columns built by helper functions (`createdAtField()`), `$defaultFn(() => createId())` with cuid2, `text({ enum })`, `integer` with `mode: "timestamp"`, `"timestamp_ms"` and `"boolean"`, `const enum`s, a type imported without `type` (`AnySQLiteColumn`), self-references, composite keys, JSDoc column notes, and v1 `relations`

## Changes from upstream

- `relations` is imported from `drizzle-orm/_relations` instead of `drizzle-orm`, because drizzle-orm 1.0 moved the v1 relational API there.
- The `@karakeep/shared/types/*` imports point at stand-ins in `src/shared/types/` that hold only what the schema imports: `API_KEY_FULL_ACCESS_SCOPE` and `BookmarkTypes` are copied as they are, and the zod-inferred `ZApiKeyScope` and `ZReaderViewReason` are `string`.
- `tsconfig.json` turns off `verbatimModuleSyntax`, because upstream imports `AnySQLiteColumn` and `SQL` without `type`.

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

- [nakita628/drizzler#34](https://github.com/nakita628/drizzler/issues/34): the docs have no SQL. The `const enum`s (`AssetTypes`, `BookmarkTypes`) are rejected by Node's strip-only type stripping.
- [nakita628/drizzler#39](https://github.com/nakita628/drizzler/issues/39): with the enums out of the way, the import of `AnySQLiteColumn` without `type` stops the schema from loading as well.
- [nakita628/drizzler#40](https://github.com/nakita628/drizzler/issues/40): the 29 columns built by `createdAtField()`, `createdAtMsField()`, `modifiedAtField()` and `modifiedAtMsField()` have the helper's name as their type, are marked `NULL` and have no default; `dbCreatedAt: createdAtField()` keeps its TypeScript key instead of `createdAt`.
