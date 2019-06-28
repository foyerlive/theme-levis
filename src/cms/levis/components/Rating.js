import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


class Rating extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    colorHighlight: PropTypes.string,
    colorBase: PropTypes.string,
  };

  static defaultProps = {
    max: 5,
    colorHighlight: '',
    colorBase: '',
  };

  render() {
    const { value, max, colorBase, colorHighlight } = this.props;
    let percentage = (value / max) * 100;
    return (
      <div className={cx('container', 'rating-container')}>
        <div className={cx('base', 'rating-base')} style={{ color: colorBase }}>
          ★★★★★
        </div>
        <div className={cx('cover', 'rating-cover')} style={{ width: percentage + '%', color: colorHighlight }}>
          ★★★★★
        </div>
      </div>
    );
  }
}

export default Rating;
