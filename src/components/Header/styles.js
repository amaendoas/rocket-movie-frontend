import styled from "styled-components";


export const Container = styled.div`
  grid-area: header;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 64px;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_500};
  padding: 24px 123px;

  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 24px;
  }

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 150px;
  }

  h3 {
    font-size: 14px;
    line-height: 18px;
  }

  a {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_500};
  }

`;