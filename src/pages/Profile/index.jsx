import { Container, Form, Avatar } from "./styles";
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input" 
import { FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi"
import { Button } from "../../components/Button"


export function Profile() {
  return(
    <Container>
      <header>
        <Link to='/'>
          <ButtonText title="Voltar" icon={BiArrowBack}/>
        </Link>
      </header>
        <Form>
          <Avatar>
            <img src="https://github.com/amaendoas.png" alt="foto do usuário" />
            <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" id="avatar" />
            </label>
          </Avatar>
          <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          />
          <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          />
          <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          />
          <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          />
          <Button title="Salvar"/>
        </Form>
    </Container>
  )

}