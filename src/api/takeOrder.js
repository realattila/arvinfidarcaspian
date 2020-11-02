import axios from './config';

export default async (data) => {
  console.log('this is order data', data);
  let formData = new FormData();

  formData.append('name', data.name);
  formData.append('number', data.number);
  formData.append('email', data.email);
  if (!!data.description)
    formData.append(
      'description',
      data.description
    );

  formData.append(
    'products',
    JSON.stringify(data.products)
  );
  try {
    const response = await axios.post(
      'TakeOrder.php',
      formData,
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
