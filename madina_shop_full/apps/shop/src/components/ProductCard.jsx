import React from 'react';

function ProductCard({ nom, image, prix }) {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center">
      {image && (
        <img src={image} alt={nom} className="w-full h-48 object-cover mb-2" />
      )}
      <h3 className="font-semibold">{nom}</h3>
      <p className="text-gray-600">{prix}</p>
    </div>
  );
}

export default ProductCard;
