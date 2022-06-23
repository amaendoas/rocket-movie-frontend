import { Container } from "./styles";

export function Input({value, ...rest}) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )

}