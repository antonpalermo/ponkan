import { HTMLAttributes } from "react"
import { cva, VariantProps } from "ui"

const headingVariants = cva("text-2xl font-bold text-gray-900 mb-2")

interface HeadingProps
  extends VariantProps<typeof headingVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

function Heading({ className, ...props }: HeadingProps) {
  return <h1 className={headingVariants({ className })} {...props} />
}

const descriptionVariants = cva("font-medium text-gray-500")

interface DescriptionProps
  extends VariantProps<typeof descriptionVariants>,
    HTMLAttributes<HTMLParagraphElement> {}

function Description({ className, ...props }: DescriptionProps) {
  return <p className={descriptionVariants({ className })} {...props} />
}

const contentVariants = cva("py-5")

interface ShellProps
  extends VariantProps<typeof contentVariants>,
    HTMLAttributes<HTMLDivElement> {}

function Content({ className, ...props }: ShellProps) {
  return <div className={contentVariants({ className })} {...props} />
}
const baseVariants = cva("py-5")

function Base({ className, ...props }: ShellProps) {
  return <div className={baseVariants({ className })} {...props} />
}

const Shell = Object.assign(Base, { Heading, Description, Content })

export default Shell
