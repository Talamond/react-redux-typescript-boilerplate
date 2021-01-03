import { momentToString } from '../../../utils/dateHelper';
import cn from 'classnames';
import React from 'react';
import { TimelineElement } from '../timelineF.js';
import { Action } from 'jsweetman-redux-typed';
import style from './timelineElement.css';
import { TimelineContentC } from './timelineContentC';

export interface Props {
  timelineElem: TimelineElement;
  selectedTab: number;
  onTabSelect: (id: number, tabIndex: number) => Action;
  windowWidth: number;
  timelineType: 'odd' | 'even' | 'education';
}

export const TimelineElementC = (props: Props) => {
  const {timelineType, timelineElem} = props;
  // {this.renderContent()}
  return <div className={cn(style.timelineElement, timelineType)}>
    <h1 className={style.timelineElement__jobTitle}>{timelineElem.title}</h1>
    <h2 className={style.timelineElement__employer}>{timelineElem.employer}</h2>
    <h3 className={style.timelineElement__startEndDates}>{momentToString(timelineElem.startDate)} - {momentToString(timelineElem.endDate)}</h3>
    <div className={cn(style.timelineElement__contentWrapper, timelineElem.type, timelineType)}>
      <TimelineContentC {...props}/>
    </div>
  </div>;
};
