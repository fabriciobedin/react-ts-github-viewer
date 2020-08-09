import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Viewer" />
      <Title>View Github repositories</Title>

      <Form>
        <input placeholder="Repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/18118086?s=460&u=c92e79f9ed6b4e502cfa8e1e3ff8de70aa8e14fb&v=4"
            alt="Fabricio Bedin"
          />
          <div>
            <strong>fabriciobedin/react-ts-github-viewer</strong>
            <p>interesting project using react with typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/18118086?s=460&u=c92e79f9ed6b4e502cfa8e1e3ff8de70aa8e14fb&v=4"
            alt="Fabricio Bedin"
          />
          <div>
            <strong>fabriciobedin/react-ts-github-viewer</strong>
            <p>interesting project using react with typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/18118086?s=460&u=c92e79f9ed6b4e502cfa8e1e3ff8de70aa8e14fb&v=4"
            alt="Fabricio Bedin"
          />
          <div>
            <strong>fabriciobedin/react-ts-github-viewer</strong>
            <p>interesting project using react with typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
