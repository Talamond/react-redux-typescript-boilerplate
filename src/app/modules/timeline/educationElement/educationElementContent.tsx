import React from 'react';
import { momentToString } from 'app/utils/dateHelper';
import { TimelineElementI } from '../timelineF';
import { useWindowSize } from 'app/utils/hooks/useWindowSize';

require('./educationElementContent.css');

export interface Props {
  timelineElem: TimelineElementI;
  isBig?: boolean;
}

export const EducationElementContent = (props: Props) => {
  const { timelineElem: {startDate, endDate, title, subTitle, employer, image}, isBig} = props;

  return <div className="educationElementContent__title">
    <h1 className="educationElementContent__jobTitle">{isBig ? title : 'Computer Science'}</h1>
    {isBig && <h2 className="educationElementContent__employer">{subTitle}</h2>}
    {isBig && <h2 className="educationElementContent__employer">{employer}</h2>}
    <h3 className="educationElementContent__subtitle">{momentToString(startDate)} - {momentToString(endDate)}</h3>
    <div className="educationElementContent__imageContainer">
      <img src={image} className="educationElementContent__image" />
    </div>
  </div>;
};
