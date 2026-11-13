# Schema docs

![ER diagram](er.svg)

## Contents

| Table                                           | Name in the database | Description |
| ----------------------------------------------- | -------------------- | ----------- |
| [posts](#table-posts)                           | `post`               |             |
| [users](#table-users)                           | `user`               |             |
| [accounts](#table-accounts)                     | `account`            |             |
| [sessions](#table-sessions)                     | `session`            |             |
| [verificationTokens](#table-verificationTokens) | `verification_token` |             |

## Tables

<a id="table-posts"></a>

### posts

Table `post`.

![posts and the tables it relates to](tables/posts.svg)

| Column        | Type      | Constraints                         | Default                          | Description |
| ------------- | --------- | ----------------------------------- | -------------------------------- | ----------- |
| `id`          | `integer` | PK NOT NULL                         |                                  |             |
| `name`        | `text`    | NULL                                |                                  |             |
| `createdById` | `text`    | NOT NULL → [users.id](#table-users) |                                  |             |
| `createdAt`   | `integer` | NOT NULL                            | ``.default(sql`(unixepoch())`)`` |             |
| `updatedAt`   | `integer` | NULL                                | `.$onUpdate()`                   |             |

#### Indexes

- INDEX `createdById`
- INDEX `name`

#### References

- `createdById` → [users.id](#table-users) (many to one)

<details>
<summary>Queries</summary>

**Select**: Every row of posts.

```ts
db.select().from(posts);
```

**Count**: How many rows posts has.

```ts
db.$count(posts);
```

**Find many**: The rows of posts, through the relational query API.

```ts
db.query.posts.findMany();
```

</details>

<a id="table-users"></a>

### users

Table `user`.

![users and the tables it relates to](tables/users.svg)

| Column          | Type      | Constraints | Default                          | Description |
| --------------- | --------- | ----------- | -------------------------------- | ----------- |
| `id`            | `text`    | PK NOT NULL | `.$defaultFn()`                  |             |
| `name`          | `text`    | NULL        |                                  |             |
| `email`         | `text`    | NOT NULL    |                                  |             |
| `emailVerified` | `integer` | NULL        | ``.default(sql`(unixepoch())`)`` |             |
| `image`         | `text`    | NULL        |                                  |             |

#### Referenced by

- `id` → [posts.createdById](#table-posts) (one to many)
- `id` → [accounts.userId](#table-accounts) (one to many)
- `id` → [sessions.userId](#table-sessions) (one to many)

<details>
<summary>Queries</summary>

**Select**: Every row of users.

```ts
db.select().from(users);
```

**Count**: How many rows users has.

```ts
db.$count(users);
```

**Find many**: The rows of users, through the relational query API.

```ts
db.query.users.findMany();
```

</details>

<a id="table-accounts"></a>

### accounts

Table `account`.

![accounts and the tables it relates to](tables/accounts.svg)

| Column              | Type      | Constraints                         | Default | Description |
| ------------------- | --------- | ----------------------------------- | ------- | ----------- |
| `userId`            | `text`    | NOT NULL → [users.id](#table-users) |         |             |
| `type`              | `text`    | NOT NULL                            |         |             |
| `provider`          | `text`    | PK NOT NULL                         |         |             |
| `providerAccountId` | `text`    | PK NOT NULL                         |         |             |
| `refresh_token`     | `text`    | NULL                                |         |             |
| `access_token`      | `text`    | NULL                                |         |             |
| `expires_at`        | `integer` | NULL                                |         |             |
| `token_type`        | `text`    | NULL                                |         |             |
| `scope`             | `text`    | NULL                                |         |             |
| `id_token`          | `text`    | NULL                                |         |             |
| `session_state`     | `text`    | NULL                                |         |             |

#### Indexes

- PRIMARY KEY `provider`, `providerAccountId`
- INDEX `userId`

#### References

- `userId` → [users.id](#table-users) (many to one)

<details>
<summary>Queries</summary>

**Select**: Every row of accounts.

```ts
db.select().from(accounts);
```

**Count**: How many rows accounts has.

```ts
db.$count(accounts);
```

**Find many**: The rows of accounts, through the relational query API.

```ts
db.query.accounts.findMany();
```

</details>

<a id="table-sessions"></a>

### sessions

Table `session`.

![sessions and the tables it relates to](tables/sessions.svg)

| Column         | Type      | Constraints                         | Default | Description |
| -------------- | --------- | ----------------------------------- | ------- | ----------- |
| `sessionToken` | `text`    | PK NOT NULL                         |         |             |
| `userId`       | `text`    | NOT NULL → [users.id](#table-users) |         |             |
| `expires`      | `integer` | NOT NULL                            |         |             |

#### Indexes

- INDEX `userId`

#### References

- `userId` → [users.id](#table-users) (many to one)

<details>
<summary>Queries</summary>

**Select**: Every row of sessions.

```ts
db.select().from(sessions);
```

**Count**: How many rows sessions has.

```ts
db.$count(sessions);
```

**Find many**: The rows of sessions, through the relational query API.

```ts
db.query.sessions.findMany();
```

</details>

<a id="table-verificationTokens"></a>

### verificationTokens

Table `verification_token`.

| Column       | Type      | Constraints | Default | Description |
| ------------ | --------- | ----------- | ------- | ----------- |
| `identifier` | `text`    | PK NOT NULL |         |             |
| `token`      | `text`    | PK NOT NULL |         |             |
| `expires`    | `integer` | NOT NULL    |         |             |

#### Indexes

- PRIMARY KEY `identifier`, `token`

<details>
<summary>Queries</summary>

**Select**: Every row of verificationTokens.

```ts
db.select().from(verificationTokens);
```

**Count**: How many rows verificationTokens has.

```ts
db.$count(verificationTokens);
```

**Find many**: The rows of verificationTokens, through the relational query API.

```ts
db.query.verificationTokens.findMany();
```

</details>
