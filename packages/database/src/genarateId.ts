import { customAlphabet } from "nanoid"

const characters =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

export const nano = customAlphabet(characters, 25)
