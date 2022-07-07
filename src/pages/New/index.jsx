import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import { Link } from 'react-router-dom'
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";
import { MovieItem } from "../../components/MovieItem";


export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewMovie() {
    if(!title) {
      return alert("Digite o título do filme!")
    }

    if(!rating) {
      return alert("Dê uma nota de 0 a 5 pro filme!")
    }

    if(newTag){
      return alert("Ops você deixou algo pra trás! Clique no botão '+' para adicionar a tag!")
    }

    await api.post("/notes",{
      title,
      description,
      tags,
      rating
    })

    alert("Filme cadastrado com sucesso!");
    navigate("/");
  }

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <Link to='/'>
          <ButtonText title="Voltar" icon={FiArrowLeft}/>
          </Link>
          <h1>Novo filme</h1>
          <div className="title">
            <Input
            type="text"
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
            />

            <Input
            type="number"
            placeholder="Sua nota (de 0 a 5)" max="5"
            min="0"
            onChange={e => setRating(e.target.value)}
            />
          </div>
          <textarea
          placeholder="Suas Observações"
          cols="30"
          rows="10"
          onChange={e => setDescription(e.target.value)}
          ></textarea>
          <h2>Marcadores</h2>
          <div className="item">
            {
              tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <MovieItem
            isNew
            placeholder="Nova tag"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}
            />
          </div>
          <div className="buttons">
            <button className="delete">
              Excluir Filme
            </button>
            <Button title="Salvar alterações" onClick={handleNewMovie}/>
          </div>
        </Form>
      </main>
    </Container>
  )
}