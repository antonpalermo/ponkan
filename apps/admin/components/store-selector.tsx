"use client"

import { useState } from "react"
import {
  ChevronUpDownIcon,
  CheckIcon,
  PlusIcon
} from "@heroicons/react/24/outline"
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  cn
} from "ui"
import { useStoreModalStore } from "@/stores/useStoreModal"
import { useParams, useRouter } from "next/navigation"

export interface StoreSelectorProps {
  stores: { id: string; name: string }[]
}

export default function StoreSelector({ stores }: StoreSelectorProps) {
  const router = useRouter()
  const params = useParams()

  const [open, setOpen] = useState<boolean>()

  const toggle = useStoreModalStore(state => state.toggle)
  const currentStore = stores.find(store => store.id === params.store_id)

  function onStoreSelect(store: { id: string; name: string }) {
    setOpen(false)
    router.push(`/overview/${store.id}`)
  }

  return (
    <Popover open={open} onOpenChange={open => setOpen(open)}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-60 justify-between"
        >
          {currentStore.name}
          <ChevronUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>Store not found!</CommandEmpty>

          <CommandGroup heading="My Stores">
            {stores.map(store => (
              <CommandItem
                key={store.id}
                onSelect={() => {
                  onStoreSelect(store)
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentStore.name === store.name
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {store.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <Button className="m-1" onClick={toggle}>
            <PlusIcon className="mr-2 h-4 w-4" />
            <span>Create new store</span>
          </Button>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
