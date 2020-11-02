import { store } from 'react-notifications-component';
export default ({
  type = null,
  title = null,
  message = null,
}) => {
  switch (type) {
    case 'success':
      store.addNotification({
        title: title,
        message: message,
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: [
          'animate__animated',
          'animate__fadeIn',
        ],
        animationOut: [
          'animate__animated',
          'animate__fadeOut',
        ],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
      break;
    case 'danger':
      store.addNotification({
        title: title,
        message: message,
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: [
          'animate__animated',
          'animate__fadeIn',
        ],
        animationOut: [
          'animate__animated',
          'animate__fadeOut',
        ],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
      break;
    case 'warning':
      store.addNotification({
        title: title,
        message: message,
        type: 'warning',
        insert: 'top',
        container: 'top-right',
        animationIn: [
          'animate__animated',
          'animate__fadeIn',
        ],
        animationOut: [
          'animate__animated',
          'animate__fadeOut',
        ],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
      break;
    default:
      break;
  }
};
