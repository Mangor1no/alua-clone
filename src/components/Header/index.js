import React, { useState, useEffect } from 'react';
import image from 'assets/images/logo-horizontal.png';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const BurgerButton = ({ navbarOpen }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(navbarOpen);
    handleClick();
  }, [navbarOpen]);

  const burgerStyles = {
    burgerContainer: {
      height: '32px',
      width: '32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '4px',
    },
    line: {
      height: '2px',
      width: '20px',
      background: 'black',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: open ? 'rotate(45deg)' : 'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: open ? 0 : 1,
      // transform: open ? 'translateX(8px)' : 'none',
    },
    lineBottom: {
      transform: open ? 'translateX(-1.5px) rotate(-45deg)' : 'none',
      transformOrigin: 'top left',
      marginTop: '5px',
    },
  };

  return (
    <div style={styles.burgerContainer}>
      <div style={{ ...burgerStyles.line, ...burgerStyles.lineTop }} />
      <div style={{ ...burgerStyles.line, ...burgerStyles.lineMiddle }} />
      <div style={{ ...burgerStyles.line, ...burgerStyles.lineBottom }} />
    </div>
  );
};

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 z-10">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-auto relative flex justify-between items-center">
          <Link to="/profile">
            <img src={image} alt="logo" className={styles.logoHorizontal} />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-3 border border-solid border-transparent block lg:hidden outline-none focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Main Menu"
            type="button"
          >
            <BurgerButton navbarOpen={navbarOpen} />
          </button>
        </div>
        <div className={navbarOpen ? 'flex flex-grow items-center' : 'lg:flex hidden'}>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto font-systemBold">
            <li className="nav-item">
              <Link to="/feed">
                <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ml-2">
                  Feed
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ml-2">
                  Discover
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">
                <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ml-2">
                  Profile
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
