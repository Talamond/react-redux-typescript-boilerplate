import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import ProgressiveImage from 'react-progressive-image';
import { TimelineState } from './timelineR';
import { EducationElementC } from './timelineElement/educationElementC';
import { TimelineElementC } from './timelineElement/timelineElementC';
import { TimelineActions } from './timelineA';
require('./timeline.css');


export interface Props {}
export interface ConnectedProps extends RouteComponentProps<void> {
  timelineState: TimelineState;
  actions: TimelineActions;
}


export const TimelineC = (props: Props & ConnectedProps) => {
  const {timelineState: {timelineElements, selectedTabs, summaryWidth}, actions} = props;
  useEffect(() => actions.fetchData(), []);

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
              onTabSelect={actions.selectTab}
            />;
            // elems.push(<TimelineElem key={index}
            //                          timelineElem={elem}
            //                          onTabSelect={selectTab}
            //                          selectedTab={selectedTabs[elem.id]}
            //                          className={className}
            //                          windowWidth={summaryWidth}
            // />);
          }
        }))}
      </div>
    </div>
  );
};
