import { createSelector } from 'reselect';

export const getMasonry = (state) => state.masonry;

export const masonryIsFetchingSelector = createSelector(
  getMasonry,
  (masonry) => masonry.isFetching
);
export const masonryDataSelector = createSelector(getMasonry, (masonry) => masonry.data);
export const masonryAllowLoadMore = createSelector(getMasonry, (masonry) => masonry.allowLoadMore);
export const masonryCurrentPage = createSelector(getMasonry, (masonry) => masonry.currentPage);
