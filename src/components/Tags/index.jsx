import { Container } from "./styles";

export function Tag({title, ...rest}){
  return (
  <Container type="button" {...rest}>
    {title}
  </Container>
  )
};


