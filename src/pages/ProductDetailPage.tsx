import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Layout } from '../components/layout'
import { SizeSelector, ColorSelector, QuantitySelector } from '../components/product'
import { getProductById } from '../data/products'
import { useCartStore } from '../store/useCartStore'
import { ProductColor } from '../types'

export function ProductDetailPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId || '')
  const { addItem } = useCartStore()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product?.colors[0] || { id: 'black', name: 'Black', hex: '#1a1a1a' }
  )
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">
            Product Not Found
          </h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </Layout>
    )
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: product.price,
      image: product.images[0],
    })
  }

  const handleCustomize = () => {
    navigate(`/customize?product=${product.id}`)
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-neutral-500 hover:text-neutral-900">
                Home
              </Link>
            </li>
            <li className="text-neutral-400">/</li>
            <li>
              <Link
                to="/products"
                className="text-neutral-500 hover:text-neutral-900"
              >
                Products
              </Link>
            </li>
            <li className="text-neutral-400">/</li>
            <li className="text-neutral-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-neutral-100 rounded-xl overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? 'border-neutral-900'
                        : 'border-transparent hover:border-neutral-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-neutral-900 mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-neutral-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            <ColorSelector
              colors={product.colors}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />

            {/* Size Selector */}
            <SizeSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSelect={setSelectedSize}
            />

            {/* Quantity */}
            <QuantitySelector quantity={quantity} onChange={setQuantity} />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={handleAddToCart} className="btn-primary flex-1">
                Add to Cart
              </button>
              {product.customizable && (
                <button
                  onClick={handleCustomize}
                  className="btn-secondary flex-1"
                >
                  Customize Design
                </button>
              )}
            </div>

            {/* Features */}
            <div className="border-t border-neutral-200 pt-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
