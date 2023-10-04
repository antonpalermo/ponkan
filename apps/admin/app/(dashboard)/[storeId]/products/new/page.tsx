import { Metadata } from "next"

import Shell from "@/components/shell"
import ProductForm from "@/components/products/product-form"

export const metadata: Metadata = {
  title: "Add new products"
}

export default async function NewProductPage() {
  return (
    <Shell>
      <Shell.Heading>New Product</Shell.Heading>
      <p className="font-medium text-gray-500">
        Provide the required details to create a new product
      </p>
      <div className="my-5">
        <ProductForm />
      </div>
    </Shell>
  )
}
