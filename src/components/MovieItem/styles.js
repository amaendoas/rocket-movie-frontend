import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

    svg {
      font-size: 24px;
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

  > input {
    border: none;
    height: 56px;
    width: fit-content;
    padding: 12px;
    background: transparent;
    color: ${({theme}) => theme.COLORS.WHITE_100};

    &:placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`