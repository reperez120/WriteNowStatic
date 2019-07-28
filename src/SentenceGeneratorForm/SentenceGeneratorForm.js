import React from 'react';
import PropTypes from 'prop-types';

export default function SentenceGeneratorForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['SentenceGeneratorForm', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}

SentenceGeneratorForm.propTypes = {
};