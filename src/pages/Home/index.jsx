import { Container, Content, Title, Search, Section } from "./styles";
import { Link } from 'react-router-dom'
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { AiOutlinePlus } from "react-icons/ai"
import { Tag } from "../../components/Tag"
import { StarRating } from "../../components/StarRating"
import { Input } from "../../components/Input";

import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function Home(){
  const [tags, setTags] = useState([]);
 
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  
  function handleDetails(id){
    navigate(`/movies/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);

      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <Title>
            <h1>Meus filmes</h1>
            <Link to='new'> 
              <Button title="Adicionar filme" icon={AiOutlinePlus}/>
            </Link>
          </Title>

          <Search>
          <Input
            placeholder="Pesquisar por Título"
            onChange={e => setSearch(e.target.value)}
            />
          </Search>

          {
            notes.map(note => (
            <Section
            key={String(note.id)}
            onClick={() => handleDetails(note.id)}>
              <h1>{note.title}</h1>
              <StarRating value={note.rating}/>
              <div class="details">
              <p>{note.description}</p>
              </div>
                {
                  note.tags &&
                  <footer>
                    {
                      note.tags.map(tag => <Tag key={tag.id} title={tag.name}></Tag>
                      )
                    }
                  </footer>
                }
            </Section>
            ))
        }
        </Content>
      </main>
    </Container>
  )
}