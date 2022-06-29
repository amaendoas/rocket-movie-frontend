import { BackgroundImg, Container, Form } from "./styles";
import { Link } from 'react-router-dom'
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Acompanhe tudo o que você assiste.</p>

        <h2>Faça seu login</h2>
        <Input type="text" placeholder="E-mail" icon={FiMail}/>
        <Input type="password" placeholder="Senha" icon={FiLock}/>

        <Button title="Entrar"/>

        <Link to="/register">
          <ButtonText title="Criar Conta"/>
        </Link>
      </Form>
      <BackgroundImg/>

    </Container>
  )

}