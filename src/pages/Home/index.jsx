import { Container, Content, Title, Section } from "./styles";
import { Link } from 'react-router-dom'
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { AiOutlinePlus } from "react-icons/ai"
import { Tag } from "../../components/Tag"
import { StarRating } from "../../components/StarRating"
import { Input } from "../../components/Input";

import { api } from "../../services/api";
import { useState, useEffect } from "react";


export function Home(){
  const [tags, setTags] = useState([]);


  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      
      setNotes(response.data)
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
          <Input
          placeholder="Pesquisar por Título"
          onChange={() => setSearch(e.target.value)}
          />
          <Link to='new'> 
          <Button title="Adicionar filme" icon={AiOutlinePlus}/>
          </Link>
          </Title>

          {
            notes.map(note => (
            <Section key={String(note.id)}>
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