import styled from 'styled-components'

const FILETYPE_MIDI = "audio/sp-midi"

const StyledDownloadLink = styled.a`
  color: inherit;
`

function DownloadLink({ file, children }) {
  if (!file) {
    return null
  }

  const downloadUrl = window.URL.createObjectURL(file)

  return (
    <StyledDownloadLink download={file.name} href={downloadUrl} type={FILETYPE_MIDI}>
      {children}
    </StyledDownloadLink>
  )
}

export default DownloadLink
