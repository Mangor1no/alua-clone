import React, { useState, useEffect } from 'react';
import { fetchMoreCatImages, fetchCatImages } from 'data/sample-reducer/actions';
import { Masonry } from 'masonic';
import ImageCards from 'components/ImageCards';
import { useDispatch, useSelector } from 'react-redux';
import { sampleDataSelector } from 'data/sample-reducer/selectors';

const InfiniteList = (props) => {
  const [loadMore, setLoadMore] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoreCatImages());
    setLoadMore(false);
  }, [loadMore]);

  const images = useSelector(sampleDataSelector);

  useEffect(() => {
    dispatch(fetchCatImages());
    const list = document.getElementById('list');
    if (props.scrollable) {
      // list has fixed height
      list.addEventListener('scroll', (e) => {
        const el = e.target;
        if (el.scrollTop + el.clientHeight === el.scrollHeight) {
          setLoadMore(true);
        }
      });
    } else {
      // list has auto height
      window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop) {
          setLoadMore(true);
        }
      });
    }
  }, []);

  useEffect(() => {
    const list = document.getElementById('list');

    if (list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [props]);

  if (images)
    return (
      <Masonry
        // Provides the data for our grid items
        items={images}
        // Adds 8px of space between the grid cells
        columnGutter={8}
        // Set default column
        columnCount={5}
        // Pre-renders 5 windows worth of content
        overscanBy={5}
        // This is the grid item component
        render={ImageCards}
      >
        {/* {images.map((image) => (
          <ImageCards url={image.url} key={image.id} />
        ))} */}
      </Masonry>
    );
  return null;
};

export default InfiniteList;
