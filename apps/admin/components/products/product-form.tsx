"use client"

import { useParams } from "next/navigation"
import { Form, Formik, FormikHelpers } from "formik"

import { Button, Input, Label, Textarea } from "ui"

interface ProductDetails {
  name: string
  description: string
}

export default function ProductForm() {
  const params = useParams()
  const initialData: ProductDetails = {
    name: "",
    description: ""
  }

  async function onSubmit(
    values: ProductDetails,
    helpers: FormikHelpers<ProductDetails>
  ) {
    const request = await fetch(`/api/products/${params.storeId}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })

    console.log(request)
  }

  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ values, handleChange, isSubmitting }) => (
        <Form>
          <div>
            <Label>Product Name</Label>
            <Input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Product name"
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              id="description"
              name="description"
              onChange={handleChange}
              placeholder="Description"
            />
          </div>
          <Button type="submit">Create</Button>
        </Form>
      )}
    </Formik>
  )
}
