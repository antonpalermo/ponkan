import { Metadata } from "next"
import ProductForm from "@/components/products/product-form"
import { UploadButton } from "@/lib/uploadthing"
import ProductImageDropzone from "@/components/products/dropzone"

export const metadata: Metadata = {
  title: "Add new products"
}

export default async function NewProductPage() {
  return (
    <div>
      <h1>Add new product</h1>
      <ProductForm />
      <ProductImageDropzone />
    </div>
  )
}
