import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #e7e7e7;
    transition: color 0.3s;

    &:hover {
      color: #999;
    }

    svg {
      margin-right: 3px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #e7e7e7;
      }

      p {
        font-size: 18px;
        color: #999;
        margin-top: 3px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 90px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #e7e7e7;
      }
      span {
        display: block;
        margin-top: 3px;
        color: #999;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 60px;

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

    div {
      margin: 0 16px;
      flex: 1;

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
