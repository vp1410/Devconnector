import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));
Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};
// We want to fetch the array inside this component, hence we are mapping a redux state to a prop.
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

// connect takes two things msp and action
export default connect(mapStateToProps)(Alert);
