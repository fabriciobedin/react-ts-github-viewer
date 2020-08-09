import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 40px;
  color: #e7e7e7;

  line-height: 55px;
  margin-top: 60px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 750px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    background: #333;
    color: #e7e7e7;

    &:focus {
      background: ${shade(0.1, '#333')};
    }
    &::placeholder {
      color: #555;
    }
  }

  button {
    width: 130px;
    height: 50px;
    background: #fe7e07;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #333;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#fe7e07')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 750px;

  a {
    background: #333;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(6px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #e7e7e7;
      }

      p {
        font-size: 16px;
        color: #777;
        margin-top: 3px;
      }
    }

    svg {
      margin-left: auto;
      color: #e7e7e7;
    }
  }
`;
