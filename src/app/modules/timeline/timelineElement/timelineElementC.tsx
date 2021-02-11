import { momentToString } from '../../../utils/dateHelper';
import cn from 'classnames';
import React from 'react';
import { TimelineElement } from '../timelineF.js';
import { TimelineContentC } from './timelineContentC';
require('./timelineElement.css');

export interface Props {
  timelineElem: TimelineElement;
  selectedTab: number;
  windowWidth: number;
  timelineType: 'odd' | 'even' | 'education';
}

export const TimelineElementC = (props: Props) => {
  const {timelineType, timelineElem} = props;
  return <div className={cn('timelineElement', timelineType)}>
    <h1 className="timelineElement__jobTitle">{timelineElem.title}</h1>
    <h2 className="timelineElement__employer">{timelineElem.employer}</h2>
    <h3 className="timelineElement__startEndDates">{momentToString(timelineElem.startDate)} - {momentToString(timelineElem.endDate)}</h3>
    <div className={cn("timelineElement__contentWrapper", timelineElem.type, timelineType)}>
      <TimelineContentC {...props}/>
    </div>
  </div>;
};
