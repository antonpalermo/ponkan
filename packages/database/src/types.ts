import type { ColumnType } from "kysely"
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export type Account = {
  id: string
  userId: string
  providerType: string
  providerId: string
  providerAccountId: string
  refreshToken: string | null
  accessToken: string | null
  accessTokenExpires: Timestamp | null
  createdAt: Generated<Timestamp>
  updatedAt: Timestamp
}
export type Sample = {
  id: string
  name: string
}
export type Session = {
  id: string
  userId: string
  expires: Timestamp
  sessionToken: string
  accessToken: string
  createdAt: Generated<Timestamp>
  updatedAt: Timestamp
}
export type User = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Timestamp | null
  image: string | null
  createdAt: Generated<Timestamp>
  updatedAt: Timestamp
}
export type VerificationRequest = {
  id: string
  identifier: string
  token: string
  expires: Timestamp
  createdAt: Generated<Timestamp>
  updatedAt: Timestamp
}
export type DB = {
  accounts: Account
  sample: Sample
  sessions: Session
  users: User
  verificationTokens: VerificationRequest
}
