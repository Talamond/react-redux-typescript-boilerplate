import { TagCloud } from 'app/components/tagCloud/tagCloud';
import { getResumeData } from 'app/utils/resumeData';
import React, { useEffect } from 'react';
import ProgressiveImage from 'react-progressive-image';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '..';
import { ProfileArea } from './profileArea/profileArea';
import { FetchData } from './timelineA';
import { EducationElementC } from './timelineElement/educationElementC';
import { TimelineElementC } from './timelineElement/timelineElementC';
require('./timeline.css');

interface Props {}

export const TimelineC = (props: Props) => {
  const {timelineElements, selectedTabs, summaryHeight, summaryWidth, allSkills} = useSelector((state: RootState) => state.timeline);
  const dispatch = useDispatch();
  useEffect(() => dispatch(new FetchData(getResumeData()) as any), []);

  return (<div className="timeline">
    <ProfileArea />
    <div className="timeline__content">
      <div className="timeline__tagCloudWrapper">
        <TagCloud
          id="allSkills"
          data={allSkills}
          factor={2}
        />
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
