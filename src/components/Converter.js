import styled from 'styled-components'

const ConverterStyled = styled.div`
  margin: 0 auto;
  padding: 10px;
  background-color: #F9F7F0;
  width: 650px;
  height: 94px;
`

function Converter({ children }) {
  return (
    <ConverterStyled>{children}</ConverterStyled>
  )
}

export default Converter
