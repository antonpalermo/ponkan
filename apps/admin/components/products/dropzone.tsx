"use client"

import { FormEvent, useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Input, Label } from "ui"
import Image from "next/image"

export default function ProductImageDropzone() {
  const [filePreview, setFilePreview] = useState<{ preview: string }[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      setFilePreview(prev => [...prev, { preview: URL.createObjectURL(file) }])
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData()

    console.log(filePreview)
    console.log(formData)
  }

  return (
    <form onSubmit={onSubmit}>
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
      <ul className="inline-flex space-x-3">
        {filePreview.map(url => (
          <li key={url.preview}>
            <Image src={url.preview} width={100} height={100} alt="image" />
          </li>
        ))}
      </ul>
    </form>
  )
}
