import { getResumeData } from 'app/utils/resumeData';
import React, { useEffect } from 'react';
import ProgressiveImage from 'react-progressive-image';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '..';
import { FetchData } from './timelineA';
import { EducationElementC } from './timelineElement/educationElementC';
import { TimelineElementC } from './timelineElement/timelineElementC';
require('./timeline.css');

interface Props {}

export const TimelineC = (props: Props) => {
  const {timelineElements, selectedTabs, summaryWidth} = useSelector((state: RootState) => state.timeline);
  const dispatch = useDispatch();
  useEffect(() => dispatch(new FetchData(getResumeData()) as any), []);

  return (<div className="timeline">
      <ProgressiveImage src="../../assets/images/mainpic.jpg" placeholder="../../assets/images/mainpicSmall.jpg">
        {(src: string) => <img src={src} alt='an image'/>}
      </ProgressiveImage>
      <div className="timeline__profile">
        <div className="timeline__jonwrapper">
          <img src="../../assets/images/me.jpeg" className="timeline__jon" />
        </div>
        <div className="timeline__title">
          <div>Jonathan Sweetman</div>
          <div>Front-end Developer</div>
        </div>
        {timelineElements && timelineElements.map(((tElem, index) => {
          const timelineType: 'odd' | 'even' = index % 2 ? 'odd' : 'even';
          if (tElem.type === 'education') {
            return <EducationElementC timelineElem={tElem} />;
          } else {
            return <TimelineElementC
              timelineElem={tElem}
              selectedTab={selectedTabs[tElem.id]}
              timelineType={timelineType}
              windowWidth={summaryWidth}
            />;
          }
        }))}
      </div>
    </div>
  );
};
