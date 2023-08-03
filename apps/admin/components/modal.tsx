"user client"

import { HTMLAttributes } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "ui"

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  isOpen: boolean
  toggle: (state: boolean) => void
}

export default function Modal({
  title,
  description,
  isOpen,
  toggle,
  children,
  ...props
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent {...props}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
