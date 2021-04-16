import React from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from 'react-virtualized';

export const MasonryComponent = ({ itemsWithSizes }) => {
  const columnWidth = 200;
  const defaultHeight = 250;
  const defaultWidth = columnWidth;

  // Default sizes help Masonry decide how many images to batch-measure
  const cache = new CellMeasurerCache({
    defaultHeight,
    defaultWidth,
    fixedWidth: true,
  });

  // Our masonry layout will use 3 columns with a 10px gutter between
  const cellPositioner = createMasonryCellPositioner({
    cellMeasurerCache: cache,
    columnCount: 3,
    columnWidth,
    spacer: 10,
  });

  function cellRenderer({ index, key, parent, style }) {
    const { item, size } = itemsWithSizes[index];
    const height = defaultHeight;

    console.log(size);

    return (
      <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
        <div style={style}>
          <img
            src={item.image}
            alt={item.title}
            style={{
              height,
              width: columnWidth,
            }}
          />
          <h4>{item.title}</h4>
        </div>
      </CellMeasurer>
    );
  }

  return (
    <Masonry
      cellCount={itemsWithSizes.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={600}
      width={800}
    />
  );
};
