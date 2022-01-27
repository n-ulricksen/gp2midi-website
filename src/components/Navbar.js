import styled from 'styled-components'

const navlinks = [{
  name: "Guitar Pro",
  href: "https://www.guitar-pro.com/",
  target: "blank"
}, {
  name: "Home",
  href: "/"
}, {
  name: "Ultimate Guitar",
  href: "https://www.ultimate-guitar.com/",
  target: "blank"
}]

const NavbarStyled = styled.ul`
  margin-top: 46px;
  list-style-type: none;
  text-align: center;
  color: #787878;
  padding: 0;
`

const Navlink = styled.li`
  display: inline;
  padding: 0 23px;
  font-size: 26px;
  font-family: "Stick", sans-serif;
`

// TODO: change color on hover
const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const Hr = styled.hr`
  width: 684px;
`

function Navbar() {
  const links = navlinks.map(link => (
    <Navlink key={link.href}>
      <Link href={link.href} target={link.target}>{link.name}</Link>
    </Navlink>
  ))
  
  return (
    <NavbarStyled>
      {links}
      <Hr />
    </NavbarStyled>
  )
}

export default Navbar
