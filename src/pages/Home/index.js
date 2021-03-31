import React from 'react';
import girl1 from 'assets/images/girl-1.jpeg';
import girl2 from 'assets/images/girl-2.jpeg';
import girl3 from 'assets/images/girl-3.jpeg';
import './index.css';
import ImageSlider from 'components/Slider';
import InfiniteList from 'components/InfiniteList';

const Home = () => {
  const imagesBanner = [girl1, girl2, girl3];
  return (
    <>
      <div className="relative">
        <ImageSlider images={imagesBanner} autoplay loop spaceBetween={0} hasOverlay />
        <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-10 px-4">
          <p className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-200 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Chuyên phóng lợn các loại
          </p>
          <button
            type="button"
            className="w-full sm:w-auto flex-none bg-gradient-to-br from-cyan-500 to-light-blue-400 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:outline-none transition-colors duration-200"
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="mt-6 px-4 md:px-8 lg:px-12">
        <p className="font-systemBold text-cool-gray-800 text-2xl my-4">Top</p>
        <div id="list">
          <InfiniteList />
        </div>
      </div>
    </>
  );
};

export default Home;
