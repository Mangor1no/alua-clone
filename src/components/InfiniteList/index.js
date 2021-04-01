import React, { useEffect, useRef } from 'react';
import { fetchMoreCatImages, fetchCatImages } from 'data/sample-reducer/actions';
import { Masonry } from 'masonic';
import ImageCards from 'components/ImageCards';
import { useDispatch, useSelector } from 'react-redux';
import { sampleDataSelector, sampleIsFetchingSelector } from 'data/sample-reducer/selectors';
import { AnimateSharedLayout } from 'framer-motion';
import ListLoader from './ListLoader';

const InfiniteList = (props) => {
  const currentPage = useRef(1);

  const dispatch = useDispatch();
  const images = useSelector(sampleDataSelector);
  const isFetching = useSelector(sampleIsFetchingSelector);

  const handleScrollFixed = (e) => async () => {
    const el = e.target;
    if (el.scrollTop + el.clientHeight === el.scrollHeight) {
      currentPage.current += 1;
      dispatch(fetchMoreCatImages(currentPage.current));
    }
  };

  const handleScroll = (list) => async () => {
    if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop) {
      currentPage.current += 1;
      dispatch(fetchMoreCatImages(currentPage.current));
    }
  };

  useEffect(() => {
    dispatch(fetchCatImages(currentPage.current));
    const list = document.getElementById('list');
    if (props.scrollable) {
      // list has fixed height
      // eslint-disable-next-line no-undef
      list.addEventListener('scroll', handleScrollFixed(e));
    } else {
      // list has auto height
      window.addEventListener('scroll', handleScroll(list));
    }
    return () => {
      list.removeEventListener('scroll', handleScrollFixed);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (images)
    return (
      <>
        <AnimateSharedLayout type="crossfade">
          <Masonry
            className="focus:outline-none"
            // Provides the data for our grid items
            items={images}
            // Adds 16px of space between the grid cells
            columnGutter={16}
            columnWidth={300}
            // Pre-renders 5 windows worth of content
            overscanBy={Infinity}
            // This is the grid item component
            render={ImageCards}
            itemHeightEstimate={500}
          />
        </AnimateSharedLayout>
        {isFetching && (
          <div className="w-full">
            <ListLoader />
          </div>
        )}
      </>
    );
  return null;
};

export default InfiniteList;
