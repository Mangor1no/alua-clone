import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { useWindowSize } from '@react-hook/window-size';
import { SCREEN_BREAKPOINTS } from 'constants/screenBreakpoints';

const ListLoader = () => {
  const [column, setColumn] = useState(1);
  const [viewBoxWidth, setViewBoxWidth] = useState(120);

  const [width] = useWindowSize();

  useEffect(() => {
    switch (true) {
      case width >= SCREEN_BREAKPOINTS.xs && width < SCREEN_BREAKPOINTS.sm: {
        setColumn(2);
        setViewBoxWidth(240);
        break;
      }
      case width >= SCREEN_BREAKPOINTS.sm && width < SCREEN_BREAKPOINTS.md: {
        setColumn(3);
        setViewBoxWidth(360);
        break;
      }
      case width >= SCREEN_BREAKPOINTS.md && width < SCREEN_BREAKPOINTS.lg: {
        setColumn(4);
        setViewBoxWidth(480);
        break;
      }
      case width >= SCREEN_BREAKPOINTS.lg: {
        setColumn(5);
        setViewBoxWidth(600);
        break;
      }
      default: {
        setColumn(1);
        setViewBoxWidth(120);
        break;
      }
    }
  }, [width]);

  const renderSkeleton = () => {
    console.log('column', column);
    switch (column) {
      case 1: {
        return (
          <>
            <rect rx="0.5rem" ry="0.5rem" x="5" y="300" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="1" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="120" width="113" height="173" />
          </>
        );
      }
      case 2: {
        return (
          <>
            <rect rx="0.5rem" ry="0.5rem" x="5" y="300" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="1" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="120" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="0" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="180" width="113" height="173" />
          </>
        );
      }
      case 3: {
        return (
          <>
            <rect rx="0.5rem" ry="0.5rem" x="5" y="300" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="1" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="120" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="0" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="180" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="360" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="80" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="200" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="0" width="113" height="74" />
          </>
        );
      }
      case 4: {
        return (
          <>
            <rect rx="0.5rem" ry="0.5rem" x="5" y="300" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="1" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="120" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="0" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="180" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="360" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="80" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="200" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="0" width="113" height="74" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="320" width="113" height="170" />
            <rect rx="0.5rem" ry="0.5rem" x="365" y="0" width="113" height="253" />
            <rect rx="0.5rem" ry="0.5rem" x="365" y="260" width="113" height="153" />
          </>
        );
      }
      default: {
        return (
          <>
            <rect rx="0.5rem" ry="0.5rem" x="5" y="300" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="1" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="120" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="0" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="180" width="113" height="173" />
            <rect rx="0.5rem" ry="0.5rem" x="125" y="360" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="80" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="200" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="0" width="113" height="74" />
            <rect rx="0.5rem" ry="0.5rem" x="245" y="320" width="113" height="170" />
            <rect rx="0.5rem" ry="0.5rem" x="365" y="0" width="113" height="253" />
            <rect rx="0.5rem" ry="0.5rem" x="365" y="260" width="113" height="153" />
            <rect rx="0.5rem" ry="0.5rem" x="485" y="0" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="485" y="120" width="113" height="113" />
            <rect rx="0.5rem" ry="0.5rem" x="485" y="240" width="113" height="193" />
            <rect rx="0.5rem" ry="0.5rem" x="5" y="420" width="113" height="103" />
            <rect rx="0.5rem" ry="0.5rem" x="365" y="420" width="113" height="103" />
            <rect rx="0.5rem" ry="0.5rem" x="485" y="440" width="113" height="103" />
          </>
        );
      }
    }
  };

  return (
    <ContentLoader
      speed={2}
      viewBox={`0 0 ${viewBoxWidth} 600`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {renderSkeleton()}
    </ContentLoader>
  );
};

export default ListLoader;
