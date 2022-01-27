import styled from 'styled-components'
import { useState } from 'react'

import FormButton from './FormButton'
import FormMessage from './FormMessage'

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
`

const FileInput = styled.input.attrs(props => ({
  type: props.type || "file"
}))`
  display: none;
`

const UploadButton = styled.button.attrs(props => ({
  type: props.type || "submit",
  disabled: props.disabled,
}))`
  font-size: 28px;
  font-family: "Stick", sans-serif;
  background-color: #C9C6C6;
  padding: 8px;
  border: none;
  display: inline-block;
  float: right;
  cursor: pointer;
`

const Filename = styled.div`
  display: inline-block;
  margin-left: 16px;
`

function FileUploadForm({ setSelectedFile, uploadFile }) {
  const [filename, setFilename] = useState("")
  const [isUploadDisabled, setIsUploadDisabled] = useState(true)

  const onFileChange = e => {
    let file = e.target.files[0]
    if (!file || file.name === "") {
      return
    }

    setFilename(file.name)
    setSelectedFile(file)
    setIsUploadDisabled(false)
  }

  const onFileUpload = e => {
    e.preventDefault()
    if (filename === "") {
      return
    }

    uploadFile()
  }

  return (
    <form onSubmit={onFileUpload}>
      <FormMessage>
        Select a Guitar Pro file to upload:
      </FormMessage>
      <Label>
        <FileInput name="gpFile" onChange={onFileChange} />
        <FormButton>Browse</FormButton>
        <Filename>{filename}</Filename>
      </Label>
      
      <UploadButton type="submit" disabled={isUploadDisabled}>Upload</UploadButton>
    </form>
  )
}

export default FileUploadForm
