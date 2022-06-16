import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    const { text, handleClick } = this.props;
    return (
      <button
        className={s.button}
        type="button"
        name={text}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  }
}
