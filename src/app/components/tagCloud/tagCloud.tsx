import React, {useState, useEffect} from 'react';
import ReactWordcloud from 'react-wordcloud';

require('./tagCloud.css');

interface Props {
  id: string;
  data: any[];
  width: number;
  height: number;
  color: string;
  factor: number;
}

export interface WordElem {
  text: string;
  value: number;
}

const createWords = (props: Props): WordElem[] => {
  const {data, height, factor} = props;
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
      elems.push({text: word.label, value: size});
    });
  }
  return elems;
};

const options = {
  fontFamily: 'HelveticaNeue-CondensedBlack',
  fontWeight: 'bold',
  enableTooltip: false,
  padding: 0,
  rotations: 1,
  rotationAngles: [0]
};

export const TagCloud = (props: Props) => {
  const {factor = 1.2, id, data, height} = props;
  const [wordElems, setWordElems] = useState(createWords(props));

  useEffect(() => {
    setWordElems(createWords(props));
  }, [data, height, factor]);

  return <div className="tagCloud" key={`tagcloud-${id}`}>
    <ReactWordcloud words={wordElems} options={options} />
  </div>;
};
