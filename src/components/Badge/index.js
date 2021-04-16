import React from 'react';
import photoTypes from 'constants/photoTypes';
import colors from 'constants/colors';

const Badge = ({ type = 24 }) => {
  const randomBadgeColor = () => {
    const randomNumber = Math.floor(Math.random() * 22);
    return Object.keys(colors)[randomNumber];
  };

  return (
    <div
      className={`bg-${randomBadgeColor()}-600 rounded-md w-max px-2 py-1 my-2 mx-4 flex items-center justify-center`}
    >
      <span className="text-white text-xs leading-snug">#{Object.keys(photoTypes)[type]}</span>
    </div>
  );
};

export default Badge;
