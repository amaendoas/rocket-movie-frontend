import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { BiSearch } from "react-icons/bi"

export function Header() {
  return (
    <Container>
      <h1>RocketMovie</h1>
      <Input placeholder="Pesquisar por Título"/>
      <Profile>
      <div>
        <h3>Amanda Guerra</h3>
        <a href="#">sair</a>
      </div>
      <img src="https://github.com/amaendoas.png" alt="" />
      </Profile>
    </Container>
  )
}