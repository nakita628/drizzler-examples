```mermaid
erDiagram
    user ||--o{ invitation : "(id) - (inviterId)"
    organization ||--o{ invitation : "(id) - (organizationId)"
    user ||--o{ member : "(id) - (userId)"
    organization ||--o{ member : "(id) - (organizationId)"
    user ||--o{ passkey : "(id) - (userId)"
    user ||--o{ session : "(id) - (userId)"
    user ||--o{ identity : "(id) - (userId)"
    invitation {
        text id PK
        text email
        text inviterId FK
        text organizationId FK
        text role
        text status
        timestamptz expiresAt
        timestamptz acceptedAt
        timestamptz rejectedAt
        timestamptz createdAt
        timestamptz updatedAt
    }
    organization {
        text id PK
        text name
        text slug
        text logo
        text metadata
        text stripeCustomerId
        timestamptz createdAt
        timestamptz updatedAt
    }
    member {
        text id PK
        text userId FK
        text organizationId FK
        text role
        timestamptz createdAt
        timestamptz updatedAt
    }
    passkey {
        text id PK
        text name
        text publicKey
        text userId FK
        text credentialID
        integer counter
        text deviceType
        boolean backedUp
        text transports
        text aaguid
        timestamptz lastUsedAt "Extended operational fields"
        text deviceName
        text platform
        timestamptz createdAt
        timestamptz updatedAt
    }
    subscription {
        text id PK
        text plan
        text referenceId
        text stripeCustomerId
        text stripeSubscriptionId
        text status
        timestamptz periodStart
        timestamptz periodEnd
        timestamptz trialStart
        timestamptz trialEnd
        boolean cancelAtPeriodEnd
        timestamptz cancelAt
        timestamptz canceledAt
        timestamptz endedAt
        integer seats
        text billingInterval
        text stripeScheduleId "Stripe schedule ID for a plan change deferred to period end; cleared when the change is applied or canceled."
        timestamptz createdAt
        timestamptz updatedAt
    }
    user {
        text id PK
        text name
        text email
        boolean emailVerified
        text image
        boolean isAnonymous
        text stripeCustomerId
        timestamptz createdAt
        timestamptz updatedAt
    }
    session {
        text id PK
        timestamptz expiresAt
        text token
        timestamptz createdAt
        timestamptz updatedAt
        text ipAddress
        text userAgent
        text userId FK
        text activeOrganizationId
    }
    identity {
        text id PK
        text accountId
        text providerId
        text userId FK
        text accessToken
        text refreshToken
        text idToken
        timestamptz accessTokenExpiresAt
        timestamptz refreshTokenExpiresAt
        text scope
        text password
        timestamptz createdAt
        timestamptz updatedAt
    }
    verification {
        text id PK
        text identifier
        text value
        timestamptz expiresAt
        timestamptz createdAt
        timestamptz updatedAt
    }
```
