import { navigate } from 'app/utils/navHelper';
import React from 'react';
require('./header.css');
const Github = require('../../../assets/images/github.svg');

export interface Props {
  headers: ({
    label: string;
    path: string;
  })[];
}

export const Header = (props: Props): JSX.Element => {

  return (
    <header className="header">
      {props.headers.map((header) => (<div className="header__elem" key={header.label} onClick={(e: React.MouseEvent<HTMLElement>) => navigate(e, header.path)}>{header.label}</div>))}
      <a className="header__githubLink" href="https://github.com/Talamond">
        <Github />
      </a>
    </header>
  );
};
