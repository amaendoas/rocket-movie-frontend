import { Container, Content, Title, Info} from "./styles";
import { Header } from "../../components/Header";
import { BiArrowBack } from "react-icons/bi"
import { Tag } from "../../components/Tag";
import { StarRating } from "../../components/StarRating";
import { FiClock } from "react-icons/fi"
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Movies() {
  const [data, setData] = useState({});
  const params = useParams();
  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])
  return (
    <Container>
      <Header/>
      {
        data && user &&
        <main>
        <Content>
          <div className="head">
            <Link to="/">
              <ButtonText title="Voltar" icon={BiArrowBack}/>
            </Link>
            <Link to="/new">Editar Filme</Link>
          </div>
          <Title>
            <h1>{data.title}</h1>
            <StarRating value={data.rating} />
          </Title>
          <Info>
          <div class="author">
            <img src={avatarUrl} alt="foto do usuário" />
            Por <span id="user">{user.name}</span>
          </div>
          <div className="time">
            <FiClock/><span id="date">{data.updated_at}</span>
          </div>
          </Info>
          {
            data.tags && data.tags.map(tag => (
              <Tag title={tag.name}/>
            ))
          }
          <div class="details">
          <p>{data.description}</p>
         </div>
        </Content>
      </main>
      }
    </Container>
  )
};