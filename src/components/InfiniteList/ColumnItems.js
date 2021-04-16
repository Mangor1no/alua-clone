// TODO: try virtualized list for masonry

// import * as React from 'react';
// import Immutable from 'immutable';
// import PropTypes from 'prop-types';
// import {
//   WindowScroller,
//   AutoSizer,
//   createMasonryCellPositioner,
//   Masonry,
//   CellMeasurer,
//   CellMeasurerCache,
// } from 'react-virtualized';
// import ImageCards from 'components/ImageCards';

// export default class ColumnItems extends React.PureComponent {
//   constructor(props, context) {
//     super(props, context);

//     this.columnCount = 0;

//     this.cache = new CellMeasurerCache({
//       defaultHeight: 250,
//       defaultWidth: 360,
//       fixedWidth: true,
//     });

//     this.state = {
//       columnWidth: 340,
//       height: 300,
//       gutterSize: 20,
//       overscanByPixels: 500,
//     };
//   }

//   onResize = ({ width }) => {
//     this.width = width;

//     this.calculateColumnCount();
//     this.resetCellPositioner();
//     this.masonry.recomputeCellPositions();
//   };

//   setMasonryRef = (ref) => {
//     this.masonry = ref;
//   };

//   calculateColumnCount = () => {
//     const { columnWidth, gutterSize } = this.state;

//     this.columnCount = Math.floor(this.width / (columnWidth + gutterSize));
//   };

//   cellRenderer = ({ index, key, parent, style }) => {
//     const { images } = this.props;
//     const { columnWidth } = this.state;

//     const image = images[index];

//     console.log(image);

//     return (
//       <CellMeasurer cache={this.cache} index={index} key={key} parent={parent}>
//         <div
//           style={{
//             ...style,
//             width: columnWidth,
//           }}
//         >
//           <ImageCards
//             id={image?.id}
//             blur_hash={image?.blur_hash}
//             alt_description={image?.alt_description}
//             urls={image?.urls}
//             width={image?.width}
//             height={image?.height}
//             user={image?.user}
//           />
//         </div>
//       </CellMeasurer>
//     );
//   };

//   initCellPositioner = () => {
//     if (typeof this.cellPositioner === 'undefined') {
//       const { columnWidth, gutterSize } = this.state;

//       this.cellPositioner = createMasonryCellPositioner({
//         cellMeasurerCache: this.cache,
//         columnCount: this.columnCount,
//         columnWidth,
//         spacer: gutterSize,
//       });
//     }
//   };

//   resetCellPositioner = () => {
//     const { columnWidth, gutterSize } = this.state;

//     this.cellPositioner.reset({
//       columnCount: this.columnCount,
//       columnWidth,
//       spacer: gutterSize,
//     });
//   };

//   renderMasonry = ({ width }) => {
//     this.width = width;

//     this.calculateColumnCount();
//     this.initCellPositioner();

//     const { overscanByPixels } = this.state;

//     return (
//       <Masonry
//         autoHeight
//         cellCount={5}
//         cellMeasurerCache={this.cache}
//         cellPositioner={this.cellPositioner}
//         cellRenderer={this.cellRenderer}
//         height={this.height}
//         overscanByPixels={overscanByPixels}
//         ref={this.setMasonryRef}
//         scrollTop={this.scrollTop}
//         width={width}
//       />
//     );
//   };

//   renderAutoSizer = ({ height, scrollTop }) => {
//     this.height = height;
//     this.scrollTop = scrollTop;

//     const { overscanByPixels } = this.state;

//     return (
//       <AutoSizer
//         disableHeight
//         height={height}
//         onResize={this.onResize}
//         overscanByPixels={overscanByPixels}
//         scrollTop={this.scrollTop}
//       >
//         {this.renderMasonry}
//       </AutoSizer>
//     );
//   };

//   render() {
//     const { columnWidth, height, gutterSize, overscanByPixels, windowScrollerEnabled } = this.state;

//     return (
//       <WindowScroller overscanByPixels={overscanByPixels}>{this.renderAutoSizer}</WindowScroller>
//     );
//   }
// }
