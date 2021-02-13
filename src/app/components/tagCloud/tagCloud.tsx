import React, {useState, useEffect} from 'react';
import ReactWordcloud from 'react-wordcloud';

require('./tagCloud.css');

interface Props {
  id: string;
  data: any[];
  width: number;
  height: number;
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

const colors = ['#1b82d1', '#efb911', '#d83456', '#e97125', '#04a699', '#b521bd', '#21c6f3', '#906d4d', '#f990e2', '#8346b4', '#6d349b', '#582383'];

const options = {
  fontFamily: 'HelveticaNeue-CondensedBlack',
  fontWeight: 'bold',
  fontSizes: [20,70],
  enableTooltip: false,
  padding: 0,
  rotations: 1,
  rotationAngles: [0]
};

let colorIndex = -1;
const callbacks = {
  getWordColor: (word: any) => {
    colorIndex++;
    if (colorIndex >= colors.length) {
      colorIndex = 0;
    }
    return colors[colorIndex];
  }
};

export const TagCloud = (props: Props) => {
  const {factor = 1.2, id, data, height} = props;
  const [wordElems, setWordElems] = useState(createWords(props));

  useEffect(() => {
    setWordElems(createWords(props));
  }, [data, height, factor]);

  return <div className="tagCloud" key={`tagcloud-${id}`}>
    <ReactWordcloud words={wordElems} options={options} callbacks={callbacks}/>
  </div>;
};
