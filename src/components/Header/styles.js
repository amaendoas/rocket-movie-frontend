import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  position: relative;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_500};
  padding: 24px 123px;

  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 24px;
  }

  > a {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.WHITE_200};
  }

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 150px;

    a {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }
  }

  h3 {
    font-size: 14px;
    line-height: 18px;
  }

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_500};
  }

`;