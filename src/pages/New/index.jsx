import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";
import { MovieItem } from "../../components/MovieItem";


export function New() {
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <ButtonText title="Voltar" icon={FiArrowLeft}/>
          <h1>Novo filme</h1>
          <div className="title">
            <Input type="text" placeholder="Título"/>
            <Input type="number" placeholder="Sua nota (de 0 a 5)" max="5" min="0"/>
          </div>
          <textarea placeholder="Observações" cols="30" rows="10"></textarea>
          <h2>Marcadores</h2>
          <div className="item">
            <MovieItem isNew value="Ação"/>
            <MovieItem value="Ficção Científica"/>
          </div>
          <div className="buttons">
            <button className="delete">
              Excluir Filme
            </button>
            <Button title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  )
}