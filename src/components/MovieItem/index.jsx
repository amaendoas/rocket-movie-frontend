import {FiPlus, FiX} from 'react-icons/fi'

import { Container } from './styles'

export function MovieItem({isNew, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input
      type="text"
      value={value}
      readOnly={!isNew}
      />
      <button
      type='button'
      onClick={onClick}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}