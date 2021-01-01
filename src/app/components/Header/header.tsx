import React from 'react';

export namespace Header {
  export interface Props {}
}

export const Header = (): JSX.Element => {
  // const handleSave = React.useCallback(
  //   (text: string) => {
  //     if (text.length) addTodo({ text });
  //   },
  //   [addTodo]
  // );
  /*

      <div className="header-elem" onClick={(e) => header.onClick(e)}>{header.label}</div>
      <div className="header-elem" onClick={(e) => header.onClick(e)}>{header.label}</div>
  */

  return (
    <header>
    <div className="github-container">
      <a href="https://github.com/Talamond">
        <img src="../../../assets/images/github.svg" />
      </a>
    </div>
    </header>
  );
};
