import { TagCloud } from 'app/components/tagCloud/tagCloud';
import { getResumeData } from 'app/utils/resumeData';
import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '..';
import { ProfileArea } from './profileArea/profileArea';
import { FetchData } from './timelineA';
import { EducationElement } from './educationElement/educationElement';
import { TimelineElement } from './timelineElement/timelineElement';
require('./timeline.css');

interface Props {}

export const Timeline: FunctionComponent<Props> = (props: Props) => {
  const allSkills = useSelector((state: RootState) => state.timeline.allSkills);
  const timelineElements = useSelector((state: RootState) => state.timeline.timelineElements);
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
          return <EducationElement key="education" timelineElem={tElem} />;
        } else {
          return <TimelineElement
            key={tElem.id}
            timelineElem={tElem}
            timelineType={timelineType}
          />;
        }
      }))}
    </div>
  </div>
  );
};
