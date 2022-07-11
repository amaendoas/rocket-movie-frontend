import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { useNavigate, useParams } from "react-router-dom";

import { Container, Form } from "./styles";
import { Link } from 'react-router-dom'
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";
import { MovieItem } from "../../components/MovieItem";


export function Edit() {
  const [data, setData] = useState({});

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState();

  const params = useParams();

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

    if(newTag){
      return alert("Ops você deixou algo pra trás! Clique no botão '+' para adicionar a tag!")
    }

    if(tags.length == 0) {
      await api.put(`/notes/${data.id}`,{
        title: title ?? data.title,
        description: description ?? data.description,
        rating: rating ?? data.rating
      })

      await api.delete(`/tags/${data.id}`)
    } else {
      await api.put(`/notes/${data.id}`,{
        title: title ?? data.title,
        description: description ?? data.description,
        tags,
        rating: rating ?? data.rating
      })

    }

    alert("Filme atualizado com sucesso!");
    navigate("/");
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente apagar esse filme?")

    if(confirm) {
     await api.delete(`/notes/${data.id}`)
  
      alert("Filme removido com sucesso!");
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      setTitle(response.data.title)
      setRating(response.data.rating)
      setDescription(response.data.description)

      const existTags = response.data.tags.map(tag => {
        return tag.name
      })
      setTags(existTags)
    }

    fetchNote();

  }, [])

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <Link to='/'>
          <ButtonText title="Voltar" icon={FiArrowLeft}/>
          </Link>
          <h1>Editar Filme</h1>
          <div className="title">
            <Input
            type="text"
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />

            <Input
            type="number"
            placeholder="Sua nota (de 0 a 5)" max="5"
            min="0"
            value={rating}
            onChange={e => setRating(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Suas Observações"
            cols="30"
            rows="10"
            value={description}
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
            <Button
            title="Excluir filme"
            onClick={handleRemove}
            blackButton
            />
            <Button
            title="Salvar alterações"
            onClick={handleNewMovie}
            />
          </div>
        </Form>
      </main>
    </Container>
  )
}