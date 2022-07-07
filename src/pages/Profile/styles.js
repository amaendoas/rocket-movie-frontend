import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;
    display: flex;
    align-items: center;
    padding: 0 144px;
    background-color: ${({theme}) => theme.COLORS.PINK_BG};

    a {
      display: flex;
      align-items: center;
      
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

  > main {
    grid-area: content;

    padding: 40px 0;
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: -84px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }

  > button {
    margin-top: 24px;
  }

`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 44px;
  width: 186px;
  height: 186px;

  > img {
  width: 186px;
  height: 186px;
  object-fit: cover;
  border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    svg {
      font-size: 20px;
      color: ${({theme}) => theme.BACKGROUND_600};
    }

    input {
      display: none;
    }
  }
`