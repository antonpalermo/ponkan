import type { ColumnType } from "kysely"
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export type Products = {
  id: string
  name: string
  description: string
  storeId: string
  dateCreated: Generated<Timestamp>
}

export type Store = {
  id: string
  name: string
  description: string | null
  owner: string
  dateCreated: Generated<Timestamp>
  dateUpdated: Timestamp
}

export type DB = {
  products: Products
  store: Store
}
