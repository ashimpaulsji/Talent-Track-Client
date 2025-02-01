import type React from "react"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Upload, X } from "lucide-react"

interface FileUploaderProps {
  accept: string
  maxSize: number
  onFileSelect: (file: File | null) => void
}

export const FileUploader: React.FC<FileUploaderProps> = ({ accept, maxSize, onFileSelect }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0])
      }
    },
    [onFileSelect],
  )

  const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
    onDrop,
    accept: accept.split(",").reduce((acc, curr) => ({ ...acc, [curr]: [] }), {}),
    maxSize,
    maxFiles: 1,
  })

  const removeFile = () => {
    onFileSelect(null)
  }

  return (
    <div>
      <Card>
        <CardContent {...getRootProps()} className="cursor-pointer p-4 text-center">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the file here ...</p>
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="mb-2" />
              <p>Drag & drop a file here, or click to select</p>
              <p className="text-sm text-muted-foreground">
                (Only {accept} files up to {maxSize / (1024 * 1024)}MB are accepted)
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      {acceptedFiles.length > 0 && (
        <div className="mt-4 flex items-center justify-between bg-secondary p-2 rounded">
          <span>{acceptedFiles[0].name}</span>
          <Button variant="ghost" size="sm" onClick={removeFile}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      {fileRejections.length > 0 && (
        <p className="mt-2 text-sm text-red-500">File not accepted. Please check the file type and size.</p>
      )}
    </div>
  )
}

