import React, {PropTypes, useEffect} from 'react';
import cloud from 'd3-cloud';
import * as d3 from "d3";
import cn from 'classnames';
import { WordElem } from './tagCloud';

interface Props {
  selectId: string;
  words: WordElem[];
  degrees: number;
  width: number;
  height: number;
  color: string;
  className: string;
}

const draw = (layout, selectId, words, color) => {
  // support 60 words, 3 different colors
  const fill = [...d3.schemeCategory20, ...d3.schemeCategory20, ...d3.schemeCategory20];

  if (d3.select(`#${selectId}`)) {
    d3.select(`#${selectId}`).append("svg")
    .attr("width", layout.size()[0])
    .attr("height", layout.size()[1])
    .append("g")
    .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
    .data(words)
    .enter().append("text")
    .style("font-size", function (d) {
      return d.size + "px";
    })
    .style("font-family", "HelveticaNeue-CondensedBlack")
    .style("font-weight", "bold")
    .style("fill", function (d, i) {
      if (color) {
        return color;
      }
      return fill[i];
    })
    .attr("text-anchor", "middle")
    .attr("transform", function (d) {
      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    })
    .text(function (d) {
      return d.text;
    });
  }

};

const setLayout = (props: Props) => {
  const {degrees, words, width, height, color, selectId} = props;
  const layout = cloud()
    .size([width, height])
    .words(words)
    .padding(0)
    .rotate(() => (Math.random() * degrees))
    .font("HelveticaNeue-CondensedBlack")
    .fontSize(function (d) {
      return d.size;
    })
    .random(() => 0.5)
    .on("end", (w) => draw(layout, selectId, w, color));

  layout.start();
}

export const D3TagCloud = (props: Props) => {
  useEffect(() => {
    if (props.words && props.words.length > 0) {
      setLayout(props);
    }
  });

  return <div id={props.selectId} className={cn('d3tagcloud-root', props.className)}></div>;
};

// export class D3TagCloud extends React.Component {

//   static propTypes = {
//   };



//   // shouldComponentUpdate(nextProps) {
//   //   // TODO only do this under certain circumstances
//   //   // this.setLayout();
//   //   if (((!this.props.words || this.props.words.length === 0) && nextProps.words && nextProps.words.length !== this.props.words.length)
//   //     || nextProps.width !== this.props.width
//   //     || nextProps.height !== this.props.height) {
//   //     // remove previous d3 clouds elements, these are not managed by react
//   //     const d3Node = document.getElementById(this.props.selectId);
//   //     while (d3Node.firstChild) {
//   //       d3Node.removeChild(d3Node.firstChild);
//   //     }
//   //     return true;
//   //   }
//   //   return false;
//   // }

//   // componentDidUpdate() {
//   //   this.setLayout();
//   // }

//   // componentDidMount() {
//   //   if (this.props.words && this.props.words.length > 0) {
//   //     this.setLayout();
//   //   }
//   // }

//   render() {
//     return (
//     );
//   }
// }
