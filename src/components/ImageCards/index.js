/* eslint-disable camelcase */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
// import { Blurhash } from 'react-blurhash';
import { Link } from 'react-router-dom';
import { FaUnlockAlt, FaUser } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
// import CardLoader from './CardLoader';

const ImageCards = ({
  id,
  // blur_hash,
  alt_description,
  urls,
  width,
  height,
  user,
  toggleScroll,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (imageId) => () => {
    setSelectedId(imageId);
    toggleScroll();
  };

  return (
    <>
      <div
        className="shadow-lg rounded-xl flex-none w-full focus:outline-none"
        key={id}
        onClick={handleClick(id)}
        role="button"
        tabIndex="0"
        aria-hidden="true"
      >
        <motion.img
          layoutId={id}
          src={urls?.regular}
          alt={alt_description}
          className="w-full rounded-xl object-cover"
          width={width}
          height={height}
          style={{ minHeight: 200 }}
        />
        {/* <Blurhash
          hash={blur_hash}
          width="100%"
          // height={imageHeight}
          height={500}
        /> */}

        <div className="px-4 py-4">
          <p className="font-systemBold break-words">{user?.name}</p>
          <p className="font-systemLight text-sm text-cool-gray-600 break-words">
            @{user?.username}
          </p>
          {user?.bio && <p className="mt-5 break-words">{user?.bio}</p>}
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.3 }}
            className={`${styles.cardOverlay} flex flex-row items-center justify-center`}
          >
            <div className="relative flex flex-col justify-center md:flex-row md:items-center md:justify-start w-10/12 md:w-8/12 lg:w-2/3 xl:w-1/2 h-auto bg-white rounded-xl overflow-hidden z-50">
              <div className="w-full md:w-1/2 overflow-hidden">
                <motion.img
                  layoutId={selectedId}
                  src={urls?.regular}
                  alt={alt_description}
                  className={`w-full h-full object-cover z-10 ${styles.image}`}
                />
              </div>
              <div className="w-full md:w-1/2 px-4 sm:px-10 md:px-8 py-6">
                <p className="font-systemBold break-words text-3xl">{user?.name}</p>
                <p className="font-systemLight text-sm text-cool-gray-600 break-words">
                  @{user?.username}
                </p>
                {user?.bio && <p className="mt-5 break-words">{user?.bio}</p>}
                <div className="flex flex-col justify-center items-center mt-10">
                  <Link to={`/u/${user?.username}`} className="w-full focus:outline-none">
                    <button
                      type="button"
                      className="my-2 px-4 py-3 text-white font-systemBold bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 rounded-xl w-full focus:outline-none"
                    >
                      <span className="flex items-center justify-center">
                        <i className="mr-2">
                          <FaUnlockAlt />
                        </i>
                        Subscribe
                      </span>
                    </button>
                  </Link>
                  <p className="font-systemLight text-sm text-cool-gray-600">or</p>
                  <Link to={`/u/${user?.username}`} className="w-full focus:outline-none">
                    <button
                      type="button"
                      className="flex items-center justify-center my-2 px-4 py-3 text-white font-systemBold bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 rounded-xl w-full focus:outline-none"
                    >
                      <span className="flex items-center justify-center">
                        <i className="mr-2">
                          <FaUser />
                        </i>
                        Go to @{user?.username} profile
                      </span>
                    </button>
                  </Link>
                </div>
                <FiX
                  size="2rem"
                  onClick={() => {
                    setSelectedId(null);
                    toggleScroll();
                  }}
                  className="absolute top-2 right-3 fa-lg cursor-pointer z-10"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(ImageCards);
