import styled from 'styled-components'

const Container = styled.div`
  margin-top: 76px;
`

const HeaderStyled = styled.h3`
  margin-top: 0;
  text-align: center;
  font-size: 36px;
`

const DescriptionStyled = styled.div`
  font-size: 20px;
`

function Description() {
  return (
    <Container>
      <HeaderStyled>Guitar Pro to Midi</HeaderStyled>
      <DescriptionStyled>

        <p>
          By using our converter you can easily convert Guitar Pro files to midi 
          files and download them for free - this service works for all kinds of 
          computers, tablets and mobile devices.
        </p>

        <p>
          Ultimate-Guitar.com is an excellent source for Guitar Pro tabs and with 
          the GuitarPro-to-Midi v0.1.5 tool we are able to convert your files 
          into a midi file that can be dropped into a digital audio workstation 
          of your choosing. Drag and drop midi files into your favorite DAW to 
          sample melodies or create backing tracks for your favorite songs. 
        </p>

        <p>
          Our service is free and does not require any software or registration. 
        </p>

        <p>
          To create a midi track, click the browse button and select a guitarpro 
          file. As soon as the conversion is finished you can download the file 
          by clicking on the download button.
        </p>

      </DescriptionStyled>
    </Container>
  )
}

export default Description
