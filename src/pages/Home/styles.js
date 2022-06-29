import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  main {
    grid-area: content;
    padding: 40px 0;
    overflow-y: auto;
  }
`

export const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  > h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
  }

  button {
    width: fit-content;
  }
`

export const Section = styled.button`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 32px;
  background-color: ${({theme}) => theme.COLORS.PINK_BG};
  margin-bottom: 24px;
  border: none;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
  .details {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: justify;
    
      p {
        max-height: 5ch;
        text-overflow: ellipsis;
        overflow: hidden;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }

    .tags {
      margin-top: 10px;
    }
`