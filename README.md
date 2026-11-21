# drizzler-examples

Well-known [Drizzle](https://orm.drizzle.team/) schemas from the wild, run through [drizzler](https://github.com/nakita628/drizzler) to check what it generates: ER diagrams, table docs and SQL.

Each app holds one upstream schema with as few changes as possible, plus the docs drizzler generated from it. Every app's README lists its source, what was changed and any known drizzler issues.

## Examples

| App | Source | Dialect | Known issues |
| --- | --- | --- | --- |
| [northwind](apps/northwind) | drizzle-team/drizzle-northwind-benchmarks-pg | PostgreSQL | — |
| [drizzle-benchmarks-pg](apps/drizzle-benchmarks-pg) | drizzle-team/drizzle-benchmarks | PostgreSQL | — |
| [drizzle-benchmarks-sqlite](apps/drizzle-benchmarks-sqlite) | drizzle-team/drizzle-benchmarks | SQLite | — |
| [realworld](apps/realworld) | bedstack/elysia-drizzle-realworld-example | PostgreSQL | — |
| [create-t3-app](apps/create-t3-app) | t3-oss/create-t3-app (NextAuth) | PostgreSQL | — |
| [create-t3-app-sqlite](apps/create-t3-app-sqlite) | t3-oss/create-t3-app (NextAuth) | SQLite | — |
| [create-t3-app-mysql](apps/create-t3-app-mysql) | t3-oss/create-t3-app (NextAuth) | MySQL | — |
| [create-t3-app-better-auth](apps/create-t3-app-better-auth) | t3-oss/create-t3-app (Better Auth) | PostgreSQL | — |
| [react-starter-kit](apps/react-starter-kit) | kriasoft/react-starter-kit | PostgreSQL | — |
| [authjs-drizzle-sqlite](apps/authjs-drizzle-sqlite) | nextauthjs/next-auth (Drizzle adapter) | SQLite | — |
| [authjs-drizzle-pg](apps/authjs-drizzle-pg) | nextauthjs/next-auth (Drizzle adapter) | PostgreSQL | — |
| [authjs-drizzle-mysql](apps/authjs-drizzle-mysql) | nextauthjs/next-auth (Drizzle adapter) | MySQL | — |
| [vercel-ai-chatbot](apps/vercel-ai-chatbot) | vercel/ai-chatbot | PostgreSQL | — |
| [saas-starter](apps/saas-starter) | nextjs/saas-starter | PostgreSQL | — |
| [midday](apps/midday) | midday-ai/midday | PostgreSQL | — |
| [kan](apps/kan) | kanbn/kan | PostgreSQL | — |
| [karakeep](apps/karakeep) | karakeep-app/karakeep | SQLite | — |
| [dyad](apps/dyad) | dyad-sh/dyad | SQLite | — |
| [zero](apps/zero) | Mail-0/Zero | PostgreSQL | — |
| [dokploy](apps/dokploy) | Dokploy/dokploy | PostgreSQL | — |
| [sim-studio](apps/sim-studio) | simstudioai/sim | PostgreSQL | — |
| [morphic](apps/morphic) | miurla/morphic | PostgreSQL | — |
| [scira](apps/scira) | zaidmukaddam/scira | PostgreSQL | — |
| [papra](apps/papra) | papra-hq/papra | SQLite | — |
| [onlook](apps/onlook) | onlook-dev/onlook | PostgreSQL | — |
| [cap](apps/cap) | CapSoftware/Cap | MySQL | — |
| [pages-cms](apps/pages-cms) | pages-cms/pages-cms | PostgreSQL | — |
| [turborepo-elysia](apps/turborepo-elysia) | vercel/turborepo (with-nextjs-elysia) | PostgreSQL | — |
| [sigle](apps/sigle) | sigle/sigle | PostgreSQL | — |
| [create-t3-turbo](apps/create-t3-turbo) | t3-oss/create-t3-turbo | PostgreSQL | — |
| [alchemy-d1](apps/alchemy-d1) | alchemy-run/alchemy (cloudflare-d1-drizzle) | SQLite | — |
| [alchemy-planetscale-mysql](apps/alchemy-planetscale-mysql) | alchemy-run/alchemy (cloudflare-planetscale-mysql-drizzle) | MySQL | — |
| [alchemy-dsql](apps/alchemy-dsql) | alchemy-run/alchemy (aws-dsql-drizzle) | PostgreSQL | — |
| [justship](apps/justship) | ocluf/justship | SQLite | — |
| [cove](apps/cove) | mugnavo/cove | PostgreSQL | — |
| [t4-app](apps/t4-app) | timothymiller/t4-app | SQLite | — |
| [duolingo-clone](apps/duolingo-clone) | sanidhyy/duolingo-clone | PostgreSQL | — |
| [canva-clone](apps/canva-clone) | Davronov-Alimardon/canva-clone | PostgreSQL | — |
| [refref](apps/refref) | amicalhq/refref | PostgreSQL | — |
| [openbio](apps/openbio) | vanxh/openbio | PostgreSQL | — |
| [infinitunes](apps/infinitunes) | rajput-hemant/infinitunes | PostgreSQL | — |
| [lipi](apps/lipi) | rajput-hemant/lipi | PostgreSQL | — |
| [rdt-li](apps/rdt-li) | nrjdalal/rdt-li | PostgreSQL | — |
| [devterms](apps/devterms) | aelew/devterms | SQLite | — |
| [mylists](apps/mylists) | vincedelmas/MyLists | SQLite | — |
| [survev](apps/survev) | survev/survev | PostgreSQL | — |
| [openstatus](apps/openstatus) | openstatusHQ/openstatus | SQLite | — |
| [hyprnote](apps/hyprnote) | fastrepl/hyprnote | SQLite | — |
| [skateshop](apps/skateshop) | sadmann7/skateshop | PostgreSQL | — |
| [relivator](apps/relivator) | reliverse/relivator | PostgreSQL | — |
| [next-saas-stripe-starter](apps/next-saas-stripe-starter) | mickasmt/next-saas-stripe-starter | PostgreSQL | — |
| [nelsonlai-dev](apps/nelsonlai-dev) | nelsonlaidev/nelsonlai.dev | PostgreSQL | — |
| [nuxt-ui-chat](apps/nuxt-ui-chat) | nuxt-ui-templates/chat | SQLite | — |
| [onestopshop](apps/onestopshop) | jackblatch/OneStopShop | MySQL | — |
| [noodle](apps/noodle) | noodle-run/noodle | PostgreSQL | — |
| [orbitkit](apps/orbitkit) | ixahmedxi/orbitkit | PostgreSQL | — |
| [zws](apps/zws) | zws-im/zws | PostgreSQL | — |
| [ai-fullstack-saas](apps/ai-fullstack-saas) | alan345/AI-Fullstack-SaaS-Boilerplate | PostgreSQL | — |
| [deft](apps/deft) | Maneek21/Deft | PostgreSQL | — |
| [cut-it](apps/cut-it) | mehrabmp/cut-it | SQLite | — |
| [flarestarter](apps/flarestarter) | FlareStarter/flarestarter | SQLite | — |
| [better-auth-cloudflare](apps/better-auth-cloudflare) | zpg6/better-auth-cloudflare (Hono example) | SQLite | — |

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

Each schema keeps the license of its source repository, linked from the app's README. drizzle-team/drizzle-northwind-benchmarks-pg, drizzle-team/drizzle-benchmarks and nextjs/saas-starter do not declare a license.
