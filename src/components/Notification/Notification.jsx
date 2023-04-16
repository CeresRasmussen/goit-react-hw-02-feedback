import css from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h2 className={css.notification}>{message}</h2>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
