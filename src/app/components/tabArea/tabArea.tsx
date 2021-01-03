import React from 'react';
import style from  './tabArea.css';
import _ from 'lodash';
import cn from 'classnames';
import OnVisible from 'react-on-visible';

export interface Props {
  tabContents: ({name: string; content: React.ReactNode;})[];
  selectedTab?: number;
  onTabSelect: (index: number) => void;
}

export const TabArea = (props: Props) => {
  const {tabContents} = props;
  const selectedTab = props.selectedTab ? props.selectedTab : 0;
  return (
    <div className={style.tabArea}>
      <div className={style.tabArea__content}>
        {tabContents[selectedTab].content}
      </div>
      <OnVisible visibleClassName="animate-tabs">
        <div className={style.tabArea__tabs}>
          {tabContents.map((tabContent, index) => {
            const selected = index === selectedTab;
            return <div key={index} className={cn(style.tabArea__tab, {selected})} onClick={() => props.onTabSelect(index)}>
              {tabContent.name}
              {selected && <div className={style.tabArea__selectedLine}/>}
            </div>;
          })}
        </div>
      </OnVisible>
    </div>
  );
};
