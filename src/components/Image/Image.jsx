import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSampleData } from 'data/sample-reducer/actions';
import { sampleDataSelector } from 'data/sample-reducer/selectors';

const Image = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSampleData());
  }, []);

  const imageUrl = useSelector(sampleDataSelector);

  console.log(imageUrl);

  if (imageUrl)
    return (
      <>
        {imageUrl.map(({ id, url }) => (
          <img key={id} src={url} alt="catto" />
        ))}
      </>
    );

  return null;
};

export default Image;
