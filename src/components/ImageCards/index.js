/* eslint-disable camelcase */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const ImageCards = ({ data: { id, alt_description, urls } }) => {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (imageId) => () => {
    setSelectedId(imageId);
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
          src={urls.regular}
          alt={alt_description}
          className="w-full rounded-t-xl"
        />
        <div className="px-4 py-4">
          <p>Meo meo</p>
          <p>Meo meomeomeomeo</p>
          <p>Mmeoeo memeomeoo</p>
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
            <div className="relative flex flex-col justify-center md:flex-row md:items-center md:justify-start w-10/12 md:w-8/12 lg:w-1/2 h-auto bg-white rounded-xl z-50">
              <motion.img
                layoutId={selectedId}
                src={urls.regular}
                alt={alt_description}
                className={`w-full md:w-1/2 rounded-t-lg md:rounded-t-none md:rounded-l-lg object-cover ${styles.cardImage}`}
              />
              <div className="w-full md:w-1/2 h-full px-4 py-6">
                <p className="text-xl font-bold">yay</p>
                <h2>you clicked me!</h2>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setSelectedId(null)}
                  className="absolute top-2 right-3 fa-lg cursor-pointer"
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
