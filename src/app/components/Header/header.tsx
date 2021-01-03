import { navigate } from 'app/utils/navHelper';
import React from 'react';
require('./header.css');

// const github = require('../../../assets/images/github.svg');

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
      <div className="header__githubContainer">
        <a href="https://github.com/Talamond">
          <svg>
            <use xlinkHref="../../../assets/images/github.svg"/>
          </svg>
        </a>
      </div>
    </header>
  );
};
