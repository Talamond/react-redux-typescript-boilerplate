import React, {useState, useEffect} from 'react';
import ReactWordcloud from 'react-wordcloud';

interface Props {
  id: string;
  data: any[];
  factor: number;
}

export interface WordElem {
  text: string;
  value: number;
}

const createWords = (props: Props): WordElem[] => {
  const {data, factor} = props;
  const elems: WordElem[] = [];
  let sum = 0;
  if (data) {
    // First calculate the total height of the sums
    data.forEach((word) => {
      sum = sum + word.weight;
    });
    // Then calculate the height of each element
    data.forEach((word) => {
      const size = Math.floor(word.weight / sum) * factor;
      elems.push({text: word.label, value: size});
    });
  }
  return elems;
};

const colors = ['#f5222d', '#fa541c', '#fa8c16', '#faad14', '#fadb14', '#a0d911', '#52c41a', '#13c2c2', '#1890ff', '#2f54eb', '#722ed1', '#eb2f96'];

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
  const {factor = 1.2, data} = props;
  const [wordElems, setWordElems] = useState(createWords(props));

  useEffect(() => {
    setWordElems(createWords(props));
  }, [data, factor]);

  return <ReactWordcloud words={wordElems} options={options} callbacks={callbacks}/>;
};
