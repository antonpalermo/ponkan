import { customAlphabet } from "nanoid"

const characters =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

export function generateId(): () => string {
  return customAlphabet(characters, 25)
}
