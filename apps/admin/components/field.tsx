import { InputHTMLAttributes } from "react"
import { cva, VariantProps } from "ui"

const fieldVariants = cva("")

interface FieldProps
  extends VariantProps<typeof fieldVariants>,
    InputHTMLAttributes<HTMLInputElement> {}

export default function Field({ className, ...props }: FieldProps) {
  return <input className={fieldVariants({ className })} {...props} />
}
