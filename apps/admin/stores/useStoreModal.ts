import { create } from "zustand"

interface StoreModalState {
  isOpen: boolean
  toggle: () => void
}

export const useStoreModalStore = create<StoreModalState>(set => ({
  isOpen: false,
  toggle: () => set(state => ({ isOpen: !state.isOpen }))
}))
