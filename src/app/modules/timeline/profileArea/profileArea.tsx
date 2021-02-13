import React from 'react';
import ProgressiveImage from 'react-progressive-image';

require('./profileArea.css');

export const ProfileArea = () => {
  return <div className="profileArea">
    <ProgressiveImage src="/assets/images/mainpic.jpg" placeholder="/assets/images/mainpicSmall.jpg">
      {(src: string) => <img src={src} alt='an image of Jonathan Sweetman'/>}
    </ProgressiveImage>
    <div className="profileArea__profile">
      <div className="profileArea__jonwrapper">
        <img src="/assets/images/me.jpeg" className="profileArea__jon" />
      </div>
      <div className="profileArea__title">
        <div>Jonathan Sweetman</div>
        <div>Front-end Developer</div>
      </div>
    </div>
  </div>
};
