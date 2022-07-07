import { Container, Profile} from "./styles";
import { Input } from "../Input";
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import  { useEffect, useState } from "react";


export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovie</h1>
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