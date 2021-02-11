import { navigate } from 'app/utils/navHelper';
import React from 'react';
require('./header.css');
// import Github from 'svg-react-loader!../../../assets/images/name.svg'
// import Icon from '../../../assets/images/github.svg';
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
      <div className="header__githubContainer">
        <a href="https://github.com/Talamond">
          <Github />
        </a>
      </div>
    </header>
  );
};
