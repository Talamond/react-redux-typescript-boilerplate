import React, {useState, useEffect} from 'react';
import {D3TagCloud} from './d3TagCloud';
import OnVisible from 'react-on-visible';
import cn from 'classnames';

require('./tagCloud.css');

interface Props {
  id: string;
  data: any[];
  width: number;
  height: number;
  color: string;
  degrees: number;
  factor: number;
}

export interface WordElem {
  text: string;
  size: number;
}

const createWords = (props: Props): WordElem[] => {
  const {data, width, height, factor} = props;
  const elems: WordElem[] = [];
  let sum = 0;
  if (data) {
    // First calculate the total height of the sums
    data.forEach((word) => {
      sum = sum + word.weight;
    });
    // Then calculate the height of each element
    data.forEach((word) => {
      const size = Math.floor((word.weight / sum) * height) * factor;
      elems.push({text: word.label, size});
    });
  }
  return elems;
};

export const TagCloud = (props: Props) => {
  const {degrees = 0, factor = 1.2, id, data, width, height, color} = props;
  const [animate, setAnimate] = useState(false);
  const [wordElems, setWordElems] = useState(createWords(props));

  useEffect(() => {
    setWordElems(createWords(props));
  });

  return <div className="tagCloud" key={`tagcloud-${id}`}>
    <OnVisible visibleClassName="animate" key={`tagcloudon-${id}`}>
      <D3TagCloud className={cn({animate})} selectId={`tagcloud-root-${id}`} degrees={degrees} words={wordElems} width={width}
                  height={height} color={color}/>
    </OnVisible>
  </div>;
};
