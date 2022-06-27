import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;
  }
`

export const Content = styled.div`
    max-width: 1300px;
    margin: 0 auto;

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    a {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({theme}) => theme.COLORS.PINK};
    }

    a svg {
      font-size: 16px;
    }

    .details {
      margin-top: 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: justify;
    }
`

export const Title = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 15px;

  > h1 {
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;
  }
`

export const Info = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 40px;

  .author {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .time {
    display: flex;
    align-items: center;
    gap: 7px;

    svg {
      width: 16px;
      height: auto;
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
`
