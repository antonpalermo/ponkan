import { Metadata } from "next"

import Shell from "@/components/shell"
import ProductForm from "@/components/products/product-form"
import ProductImageDropzone from "@/components/products/dropzone"

export const metadata: Metadata = {
  title: "Add new products"
}

export default async function NewProductPage() {
  return (
    <Shell>
      <Shell.Heading>New Product</Shell.Heading>
      <Shell.Description>
        Provide the required details to create a new product
      </Shell.Description>
      <Shell.Content>
        <ProductImageDropzone />
        <ProductForm />
      </Shell.Content>
    </Shell>
  )
}
