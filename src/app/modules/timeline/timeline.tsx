import { TagCloud } from 'app/components/tagCloud/tagCloud';
import { getResumeData } from 'app/utils/resumeData';
import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '..';
import { ProfileArea } from './profileArea/profileArea';
import { AddTag, FetchData, RemoveTag } from './timelineA';
import { EducationElement } from './educationElement/educationElement';
import { TimelineElement } from './timelineElement/timelineElement';
import { TagMaker } from 'app/components/tagMaker/tagMaker';
require('./timeline.css');

interface Props {}

export const Timeline: FunctionComponent<Props> = (props: Props) => {
  const allSkills = useSelector((state: RootState) => state.timeline.allSkills);
  const timelineElements = useSelector((state: RootState) => state.timeline.timelineElements);
  const tags = useSelector((s: RootState) => s.timeline.tags);
  const dispatch = useDispatch();
  useEffect(() => dispatch(new FetchData(getResumeData()) as any), []);

  return (<div className="timeline">
    <ProfileArea />
    <div style={{height: '500px', width: '100%'}}>
      <TagMaker tags={tags} onAdd={(tag: string) => dispatch(new AddTag(tag))} onRemove={(index: number) => dispatch(new RemoveTag(index))} />
    </div>
    <div className="timeline__content">
      <div className="timeline__tagCloudWrapper">
        <TagCloud
          id="allSkills"
          data={allSkills}
          isBig
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
