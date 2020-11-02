import axios from './config';

export default async (data) => {
  let formData = new FormData();

  formData.append('name', data.name);
  formData.append('number', data.number);
  formData.append('email', data.email);
  formData.append('subject', data.subject);
  formData.append('message', data.message);
  try {
    const response = await axios.post(
      'SendMessage.php',
      data,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }
    );

    return response;
  } catch (e) {
    return e.response;
  }
};
