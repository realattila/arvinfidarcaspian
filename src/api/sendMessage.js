import axios from './config';

export default (data) => {
  try {
    const response = axios.post('SendMessage.php', data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};
