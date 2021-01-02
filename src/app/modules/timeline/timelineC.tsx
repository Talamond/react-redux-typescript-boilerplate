import React from 'react';
import { RouteComponentProps } from 'react-router';
import ProgressiveImage from 'react-progressive-image';
import style from './timeline.css';


export namespace TimelineC {
  export interface Props extends RouteComponentProps<void> {}
}

export const TimelineC = ({ history, location }: TimelineC.Props) => {
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
      </div>
    </div>
  );
};
