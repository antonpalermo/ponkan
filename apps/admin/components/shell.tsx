import { HTMLAttributes } from "react"
import { cva, VariantProps } from "ui"

const shellHeadingVariants = cva("text-2xl font-bold text-gray-900")

interface ShellHeadingProps
  extends VariantProps<typeof shellHeadingVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

function Heading({ className, ...props }: ShellHeadingProps) {
  return <h1 className={shellHeadingVariants({ className })} {...props} />
}

const shellBaseVariants = cva("")

interface ShellBaseProps
  extends VariantProps<typeof shellBaseVariants>,
    HTMLAttributes<HTMLDivElement> {}

function ShellBase({ className, ...props }: ShellBaseProps) {
  return <div className={shellBaseVariants({ className })} {...props} />
}

const Shell = Object.assign(ShellBase, { Heading })

export default Shell
