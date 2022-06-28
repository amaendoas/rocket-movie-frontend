import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background: ${({theme}) => theme.COLORS.PINK};
  border-radius: 10px;
  border: none;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
`;