import { BackgroundImg, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Acompanhe tudo o que você assiste.</p>

        <h2>Crie sua Conta</h2>
        <Input type="text" placeholder="Nome" icon={FiUser}/>
        <Input type="text" placeholder="E-mail" icon={FiMail}/>
        <Input type="password" placeholder="Senha" icon={FiLock}/>

        <Button title="Cadastrar"/>

        <ButtonText title="Voltar para o login" icon={FiArrowLeft}/>
      </Form>
      <BackgroundImg/>

    </Container>
  )

}