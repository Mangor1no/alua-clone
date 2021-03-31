import React from 'react';

const ImageCards = ({ data: { id, url } }) => {
  return (
    <div className="shadow-lg rounded-xl flex-none w-full" key={id}>
      <img src={url} alt="card" className="w-full rounded-t-xl" />
      <div className="px-4 py-4">
        <p>Meo meo</p>
        <p>Meo meomeomeomeo</p>
        <p>Mmeoeo memeomeoo</p>
      </div>
    </div>
  );
};

export default React.memo(ImageCards);
