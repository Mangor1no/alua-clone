import { createSelector } from 'reselect';

export const getProfile = (state) => state.profile;

export const profileIsFetchingSelector = createSelector(
  getProfile,
  (profile) => profile.isFetching
);
export const profileDataSelector = createSelector(getProfile, (profile) => profile.data);
export const profileAllowLoadMore = createSelector(getProfile, (profile) => profile.allowLoadMore);
export const profileCurrentPage = createSelector(getProfile, (profile) => profile.currentPage);
