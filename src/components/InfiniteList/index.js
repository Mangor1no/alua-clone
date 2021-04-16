import React, { useEffect, useRef, useCallback } from 'react';
import { fetchMoreMasonryImages, fetchMasonryImages } from 'data/masonry-reducer/actions';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageCards from 'components/ImageCards';
import { useDispatch, useSelector } from 'react-redux';
import {
  masonryDataSelector,
  masonryIsFetchingSelector,
  masonryAllowLoadMore,
  masonryCurrentPage,
} from 'data/masonry-reducer/selectors';
import { AnimateSharedLayout } from 'framer-motion';
import ListLoader from './ListLoader';

const InfiniteList = ({ isMasonry, toggleScroll }) => {
  const dispatch = useDispatch();
  const images = useSelector(masonryDataSelector);
  const isFetching = useSelector(masonryIsFetchingSelector);
  const allowLoadMore = useSelector(masonryAllowLoadMore);
  const currentPage = useSelector(masonryCurrentPage);

  useEffect(() => {
    if (images) {
      dispatch(fetchMoreMasonryImages(currentPage));
    } else {
      dispatch(fetchMasonryImages(currentPage));
    }
  }, []);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && allowLoadMore) {
          dispatch(fetchMoreMasonryImages(currentPage));
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetching, allowLoadMore]
  );

  const renderList = () => {
    if (isMasonry) {
      return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 768: 3, 1024: 4, 1280: 5 }}>
          <Masonry gutter="18px">
            {images.map((image, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`${image.id}_${index}`} ref={lastBookElementRef} className="align-bottom">
                  <ImageCards
                    id={image.id}
                    blur_hash={image.blur_hash}
                    alt_description={image.alt_description}
                    urls={image.urls}
                    width={image.width}
                    height={image.height}
                    user={image.user}
                    toggleScroll={toggleScroll}
                  />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      );
    }
    return images.map((image) => (
      <div key={image.id} ref={lastBookElementRef} className="align-bottom">
        <ImageCards
          id={image.id}
          blur_hash={image.blur_hash}
          alt_description={image.alt_description}
          urls={image.urls}
          width={image.width}
          height={image.height}
          user={image.user}
          toggleScroll={toggleScroll}
        />
      </div>
    ));
  };

  if (images)
    return (
      <>
        <AnimateSharedLayout type="crossfade">{renderList()}</AnimateSharedLayout>
        {isFetching && (
          <div className="w-full mt-5">
            <ListLoader />
          </div>
        )}
      </>
    );
  return null;
};

export default React.memo(InfiniteList);
