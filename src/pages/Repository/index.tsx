import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Viewer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Back
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/18118086?s=460&u=c92e79f9ed6b4e502cfa8e1e3ff8de70aa8e14fb&v=4"
            alt="Github Viewer"
          />
          <div>
            <strong>fabriciobedin/some-project</strong>
            <p>some interesting description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2000</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>99</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>121</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        {/* {repositories.map(repository => ( */}
        <Link to="ddd">
          <div>
            <strong>fabriciobedin/react-ts-github-viewer/</strong>
            <p>some interesting description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
        {/* ))} */}
      </Issues>
    </>
  );
};

export default Repository;
