import { Container } from './styles'

export function Button({title, blackButton,  loading = false, isDelete, icon: Icon, ...rest}) {

  return (
    <Container
    type='button'
    disabled={loading}
    {...rest}
    blackButton={blackButton}
    >
    {Icon && <Icon size={16} />}
    {loading ? 'Carregando...' : title}
    </Container>
  )
}