import styled from 'styled-components'

const DivStyled = styled.div`
  text-align: center;
`

const HeaderStyled = styled.h1`
  font-family: "Stick", sans-serif;
  font-size: 94px;
  line-height: 94px;
  text-transform: uppercase;
  margin-top: 44px;
  margin-bottom: 0;
`;

const SubheaderStyled = styled.p`
  margin-top: 8px;
  font-size: 22px;
  color: #787878;
`

function Header() {
  return (
    <DivStyled>
      <HeaderStyled>gp2midi</HeaderStyled>
      <SubheaderStyled>Guitar Pro to midi file converter</SubheaderStyled>
    </DivStyled>
  )
}

export default Header
