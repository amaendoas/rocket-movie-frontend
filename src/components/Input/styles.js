import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  border: none;
  height: 56px;
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
  padding: 20px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  border-radius: 10px;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }
`