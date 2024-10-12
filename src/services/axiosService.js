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

export const getAllProductsApi = async () => {
  try {
    const response = await baseApi.get('/products/getAll');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
}
{/*add a user api */}

export const addUserApi = async (formData) => {
  try {
    const response = await baseApi.post('/users/add', formData, {
      headers: {
        'Content-Type' : 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
}

export default {
  addProductApi,
  addUserApi,
  getAllProductsApi
};
  