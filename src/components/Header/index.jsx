import { Container, Profile} from "./styles";
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Link to="/">
      <h1>RocketMovies</h1>
      </Link>
      <Profile to='/profile'>
        <div>
          <h3>{user.name}</h3>
          <Link to='/' onClick={signOut}>
            sair
          </Link>
        </div>
        <img src={avatarUrl} alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}