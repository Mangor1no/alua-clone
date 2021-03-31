import { createSelector } from 'reselect';

export const getSample = (state) => state.sample;

export const sampleIsFetchingSelector = createSelector(getSample, (sample) => sample.isFetching);
export const sampleDataSelector = createSelector(getSample, (sample) => sample.data);
