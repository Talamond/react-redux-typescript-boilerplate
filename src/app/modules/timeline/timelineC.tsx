import React from 'react';
import { RouteComponentProps } from 'react-router';
import ProgressiveImage from 'react-progressive-image';
import style from './timeline.css';
import { TimelineState } from './timelineR';
import { EducationElementC } from './timelineElement/educationElementC';


export interface Props {}
export interface ConnectedProps extends RouteComponentProps<void> {
  timelineState: TimelineState;
}


export const TimelineC = ({ timelineState }: Props & ConnectedProps) => {
  const {timelineElements} = timelineState;
  return (<div className={style.timeline}>
      <ProgressiveImage src="../../assets/images/mainpic.jpg" placeholder="../../assets/images/mainpicSmall.jpg">
        {(src: string) => <img src={src} alt='an image'/>}
      </ProgressiveImage>
      <div className={style.timeline__profile}>
        <div className={style.timeline__jonwrapper}>
          <img src="../../assets/images/me.jpeg" className={style.timeline__jon} />
        </div>
        <div className={style.timeline__title}>
          <div>Jonathan Sweetman</div>
          <div>Front-end Developer</div>
        </div>
        {timelineElements && timelineElements.map(((tElem, index) => {
          let timelineType: 'odd' | 'even' = index % 2 ? 'odd' : 'even';
          if (tElem.type === 'education') {
            return <EducationElementC timelineElem={tElem} />;
          } else {
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
