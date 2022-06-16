import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;
    return <p className={s.notification}>{message}</p>;
  }
}
