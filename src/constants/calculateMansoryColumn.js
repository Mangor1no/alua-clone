import { SCREEN_BREAKPOINTS } from './screenBreakpoints';

function calculateMansoryColumn({ width }) {
  switch (true) {
    case width >= SCREEN_BREAKPOINTS.sm && width < SCREEN_BREAKPOINTS.md: {
      return {
        column: 2,
        viewBoxWidth: 240,
      };
    }
    case width >= SCREEN_BREAKPOINTS.md && width < SCREEN_BREAKPOINTS.lg: {
      return {
        column: 3,
        viewBoxWidth: 360,
      };
    }
    case width >= SCREEN_BREAKPOINTS.lg && width < SCREEN_BREAKPOINTS.xl: {
      return {
        column: 4,
        viewBoxWidth: 480,
      };
    }
    case width >= SCREEN_BREAKPOINTS.xl: {
      return {
        column: 5,
        viewBoxWidth: 600,
      };
    }
    default: {
      return {
        column: 1,
        viewBoxWidth: 120,
      };
    }
  }
}

export default calculateMansoryColumn;
