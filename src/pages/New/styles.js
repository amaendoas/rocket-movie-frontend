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
    padding: 40px 0;
    overflow-y: auto;
  }
`
export const Form = styled.form`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;

  h1 {
    margin: 24px 0 40px 0;
  }


  .title {
    display: flex;
    gap: 40px;
    margin-bottom: 30px;
  }

  textarea {
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};
    width: 100%;
    height: 380px;
    border: none;
    border-radius: 10px;
    padding: 20px;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    resize: none;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    padding: 40px 0 32px;
  }

  .item {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding: 16px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .buttons {
    display: flex;
    gap: 10px;
    padding-top: 40px;
  }

  .delete {
    width: 100%;
    height: 56px;
    border-radius: 10px;
    border: none;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 16px;
  }
`
