import styled from "styled-components";
import backgroundImg from "../../assets/movie.png"

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  align-items: stretch;
  grid-template-columns: auto 640px;
  grid-template-rows: 100%;
  grid-template-areas: "img" "content";
`

export const Form = styled.form`
  max-width: 340px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  div {
    margin-bottom: 8px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin: 48px 0 32px;
  }

  button {
    margin: 24px 0 32px;
  }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 20%;
`