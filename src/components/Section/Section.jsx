import css from 'components/Section/Section.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = { title: PropTypes.string };
