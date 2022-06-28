import styled from "styled-components";

export const Container = styled.button`
  font-family: 'Roboto', sans-serif;
  width: fit-content;
  height: 30px;
  font-size: 12px;
  background: ${({theme}) => theme.COLORS.PINK_BG};
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  color: ${({theme}) => theme.COLORS.WHITE_200};
  margin-right: 8px;
`