import baseApi from './baseApi';

export const addProductApi = async (formData) => {
  try {
    const response = await baseApi.post('/products/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};
