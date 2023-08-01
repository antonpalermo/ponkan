"use client"

import { useReducer } from "react"
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/outline"
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

enum ActionType {
  SET_IS_OPEN,
  SET_SELECTED_STORE
}

type StoreSelectorAction =
  | {
      type: ActionType.SET_IS_OPEN
    }
  | { type: ActionType.SET_SELECTED_STORE; payload: string }

type StoreSelectorState = {
  isOpen: boolean
  selectedStore: string
}

const DummyStoreMetadata = [
  {
    id: "WbNz5CcPR7pehgn",
    name: "Ponkan"
  },
  {
    id: "EE4uCtfkV3zfzSs",
    name: "Prime"
  }
]

function reducer(state: StoreSelectorState, action: StoreSelectorAction) {
  switch (action.type) {
    case ActionType.SET_IS_OPEN:
      return { ...state, isOpen: !state.isOpen }
    case ActionType.SET_SELECTED_STORE:
      return { ...state, selectedStore: action.payload }
    default:
      return state
  }
}

export default function StoreSelector() {
  const [state, dispatch] = useReducer(reducer, {
    isOpen: false,
    selectedStore: ""
  })

  return (
    <Popover
      open={state.isOpen}
      onOpenChange={() => dispatch({ type: ActionType.SET_IS_OPEN })}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={state.isOpen}
          className="w-[200px] justify-between"
        >
          {state.selectedStore}
          <ChevronUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {DummyStoreMetadata.map(store => (
              <CommandItem
                key={store.id}
                onSelect={currentValue => {
                  dispatch({
                    type: ActionType.SET_SELECTED_STORE,
                    payload: currentValue
                  })
                  dispatch({ type: ActionType.SET_IS_OPEN })
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4",
                    state.selectedStore === store.name
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {store.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
