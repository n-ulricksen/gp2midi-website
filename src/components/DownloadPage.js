import styled from 'styled-components'

import FormButton from './FormButton'
import DownloadLink from './DownloadLink'
import FormMessage from './FormMessage'

const Container = styled.div`
  width: 100%;
`

const Buttons = styled.div`
  display: block;
  margin: 0 auto;
`

const StartOverButton = styled.button`
  font-size: 28px;
  font-family: "Stick", sans-serif;
  background-color: #C9C6C6;
  padding: 8px;
  border: none;
  display: inline-block;
  float: right;
  cursor: pointer;
`

function DownloadPage({ midiFile, startOver }) {
  console.log(midiFile)
  return (
    <Container>
      <FormMessage>MIDI file ready: {midiFile.name}</FormMessage>
      <Buttons>
        <DownloadLink file={midiFile}>
          <FormButton>Download</FormButton>
        </DownloadLink>
        <StartOverButton onClick={startOver}>Start Over</StartOverButton>
      </Buttons>
    </Container>
  )
}

export default DownloadPage
