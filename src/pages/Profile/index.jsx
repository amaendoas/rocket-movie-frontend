import { Container, Form, Avatar } from "./styles";
import { Link, Navigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input"; 
import { FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { user, updateProfile, signOut } = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
    navigate("/")
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

  }

  async function handleDeleteAccount() {
    const confirm = window.confirm("Deseja realmente apagar sua conta?")
    
    try {
      if(confirm) {
        await api.delete("/users", {id: user.id})
        alert("Conta Deletada com sucesso")
        signOut()
        navigate("/")
      }
    } catch(error){
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível deletar sua conta.")
        }
      }
    }


  return(
    <Container>
      <header>
        <Link to='/'>
          <ButtonText title="Voltar" icon={BiArrowBack}/>
        </Link>
      </header>
        <Form>
          <Avatar>
            <img src={avatar} alt="foto do usuário" />
            <label htmlFor="avatar">
            <FiCamera/>
            <input
            type="file"
            id="avatar"
            onChange={handleChangeAvatar}
            />
            </label>
          </Avatar>
          <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
          />

          <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          <div className="buttons">
            <Button title="Salvar" onClick={handleUpdate}/>
            <Button blackButton title="Deletar Conta" onClick={handleDeleteAccount}/>
          </div>
        </Form>
    </Container>
  )

}