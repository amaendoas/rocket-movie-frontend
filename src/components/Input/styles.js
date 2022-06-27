import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.GRAY_200};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  height: 56px;

  input {
    background: transparent;
    width: 100%;
    border: none;
  }
  
  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }
`