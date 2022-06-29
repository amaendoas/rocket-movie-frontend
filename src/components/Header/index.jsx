import { Container, Profile} from "./styles";
import { Input } from "../Input";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <h1>RocketMovie</h1>
      <Input placeholder="Pesquisar por Título"/>
      <Profile to='/profile'>
        <div>
          <h3>Amanda Guerra</h3>
          <Link to='/'>
            sair
          </Link>
        </div>
        <img src="https://github.com/amaendoas.png" alt="" />
      </Profile>
    </Container>
  )
}