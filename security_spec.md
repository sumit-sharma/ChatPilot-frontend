# Security Specification

## Data Invariants
- A user can only read and write their own profile document.
- `createdAt` is immutable after creation.
- `email` must match the authenticated user's email.

## The "Dirty Dozen" Payloads
1. Attempt to write to another user's profile. (Expected: DENIED)
2. Attempt to read another user's profile. (Expected: DENIED)
3. Attempt to update `createdAt` field. (Expected: DENIED)
4. Create profile with `email` mismatch. (Expected: DENIED)
5. Create profile without authentication. (Expected: DENIED)
6. Update profile with extra "admin" field. (Expected: DENIED)
7. Delete user profile by a random user. (Expected: DENIED)
8. List all users by a random user. (Expected: DENIED)
9. Create profile with invalid ID format. (Expected: DENIED)
10. Update profile with ridiculously large string. (Expected: DENIED)
11. Update `linkedAccounts.facebook` by a non-owner. (Expected: DENIED)
12. Fetch profile via common user list query without owner filter. (Expected: DENIED)

## Test Runner
The firestore.rules.test.ts will verify these constraints.
