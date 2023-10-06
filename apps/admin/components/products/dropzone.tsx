"use client"

import { Fragment, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Input, Label } from "ui"

export default function ProductImageDropzone() {
  const onDrop = useCallback(files => {
    console.log(files)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Fragment>
      <Label>Product Image</Label>
      <div
        {...getRootProps({
          className:
            "p-10 text-gray-500 border border-dashed border-gray-500 rounded-md my-3 text-center"
        })}
      >
        <Input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </Fragment>
  )
}
