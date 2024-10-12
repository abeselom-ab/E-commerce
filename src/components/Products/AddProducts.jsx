import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/features/productSlice';

function AddProductForm() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    productName: '',
    productImage: null,
    productType: '',
    productPrice: '',
    productDescription: '',
    productRating: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
       
  const handleImageChange = (e) => {
    setProduct({
      ...product,
      productImage: e.target.files[0], // Set the selected file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FormData to hold text and image data
    const formData = new FormData();
    formData.append('productName', product.productName);
    formData.append('productType', product.productType);
    formData.append('productPrice',product.productPrice);
    formData.append('productDescription', product.productDescription);
    formData.append('productRating', product.productRating);
    formData.append('productImage', product.productImage); // Append the image

    // Dispatch the form data to Redux action
    dispatch(addProduct(formData));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-600 focus:border-primary-600"
            required
          />
        </div>

        {/* Product Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Image</label>
          <input
            type="file"
            name="productImage"
            onChange={handleImageChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-600 focus:border-primary-600"
            accept="image/*"
            required
          />
        </div>
  
         {/* Product Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Price</label>
          <input
            type="number"
            name="productPrice"
            value={product.productPrice}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-600 focus:border-primary-600"
            required
          />
        </div>

        {/* Product Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Type</label>
          <select
            name="productType"
            value={product.productType}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-600 focus:border-primary-600"
            required
          >
            <option value="">Select a type</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
            <option value="footwear">Footwear</option>
          </select>
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Description</label>
          <textarea
            name="productDescription"
            value={product.productDescription}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-600 focus:border-primary-600"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Product Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Rating (1-5)</label>
          <input
            type="number"
            name="productRating"
            value={product.productRating}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-600 focus:border-primary-600"
            min="1"
            max="5.5"
            step="0.1"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
