import { BackgroundImg, Container, Form } from "./styles";
import { Link } from 'react-router-dom'
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Acompanhe tudo o que você assiste.</p>

        <h2>Faça seu login</h2>
        <Input
        type="text"
        placeholder="E-mail"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}
        />

        <Input
        type="password"
        placeholder="Senha"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">
          <ButtonText title="Criar Conta"/>
        </Link>
      </Form>
      <BackgroundImg/>

    </Container>
  )

}