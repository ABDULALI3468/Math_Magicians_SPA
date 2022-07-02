import React from 'react';
import PropTypes from 'prop-types';

class InputResult extends React.PureComponent {
  render() {
    const { displayState } = this.props;

    return <div id="screen">{displayState.next || displayState.operation || displayState.total || '0'}</div>;
  }
}

InputResult.propTypes = {
  displayState: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

export default InputResult;
