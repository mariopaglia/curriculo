import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styled from './styles.module.scss';

/**
 * Footer component
 * @returns {JSX.Element} Footer component
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styled.footer}>
      <div className={styled.container}>
        <div className={styled.content}>
          <p className={styled.copyright}>© {currentYear} Mario Paglia. Todos os direitos reservados.</p>
          <p className={styled.madeWith}>
            Feito com <FaHeart className={styled.heart} /> em React
          </p>
        </div>
      </div>
    </footer>
  );
};
