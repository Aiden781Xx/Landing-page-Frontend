import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../services/api';

interface ProductCardProps {
  product: Product;
  onView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onView, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <button
              onClick={() => onView?.(product)}
              className="p-3 bg-white rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-colors shadow-lg transform hover:scale-110"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button
              onClick={() => onAddToCart?.(product)}
              className="p-3 bg-white rounded-full text-gray-900 hover:bg-green-600 hover:text-white transition-colors shadow-lg transform hover:scale-110"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 mt-2 line-clamp-3 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">(4.8)</span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </div>
          </div>
          
          <button
            onClick={() => onAddToCart?.(product)}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;