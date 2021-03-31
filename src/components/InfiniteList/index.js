import React, { useEffect, useRef } from 'react';
import { fetchMoreCatImages, fetchCatImages } from 'data/sample-reducer/actions';
import { Masonry } from 'masonic';
import ImageCards from 'components/ImageCards';
import { useDispatch, useSelector } from 'react-redux';
import { sampleDataSelector, sampleIsFetchingSelector } from 'data/sample-reducer/selectors';
import { AnimateSharedLayout } from 'framer-motion';

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

  // useEffect(() => {
  //   console.log(selectedId);
  // }, [selectedId]);

  // const handleClickOnCard = (id) => {
  //   setSelectedId(id);
  // };

  // const CardWithClick = useCallback(
  //   (imageData) => <ImageCards data={imageData.data} handleClickOnCard={handleClickOnCard} selectedId={selectedId}/>,
  //   []
  // );

  if (images)
    return (
      <>
        <AnimateSharedLayout type="crossfade">
          <Masonry
            className="focus:outline-none"
            // Provides the data for our grid items
            items={images}
            // Adds 8px of space between the grid cells
            columnGutter={8}
            columnWidth={300}
            // Pre-renders 5 windows worth of content
            overscanBy={3}
            // This is the grid item component
            render={ImageCards}
          />
        </AnimateSharedLayout>
        {isFetching && (
          <div className="fa-3x">
            <i className="fas fa-circle-notch fa-spin" />
          </div>
        )}
      </>
    );
  return null;
};

export default InfiniteList;
