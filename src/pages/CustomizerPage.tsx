import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components/layout'
import { HoodieCanvas, PlacementCustomizer, ColorPicker } from '../components/customizer'
import { SizeSelector } from '../components/product'
import { useCustomizerStore } from '../store/useCustomizerStore'
import { useCartStore } from '../store/useCartStore'
import { sizes } from '../data/products'

export function CustomizerPage() {
  const navigate = useNavigate()
  const [isAdding, setIsAdding] = useState(false)
  const {
    selectedColor,
    selectedSize,
    setSelectedSize,
    // Front
    decalImage,
    decalPosition,
    decalScale,
    decalRotation,
    textValue,
    textFont,
    textColor,
    textPosition,
    textScale,
    textRotation,
    // Back
    backImage,
    backText,
    backTextFont,
    backTextColor,
    backPosition,
    backScale,
    backRotation,
    // Left shoulder
    leftShoulderImage,
    leftShoulderText,
    leftShoulderTextFont,
    leftShoulderTextColor,
    leftShoulderPosition,
    leftShoulderScale,
    leftShoulderRotation,
    // Right shoulder
    rightShoulderImage,
    rightShoulderText,
    rightShoulderTextFont,
    rightShoulderTextColor,
    rightShoulderPosition,
    rightShoulderScale,
    rightShoulderRotation,
    resetCustomizer,
  } = useCustomizerStore()
  const { addItem } = useCartStore()

  // Calculate prices based on customizations
  const basePrice = 79.99
  const hasFrontCustomization = decalImage || textValue
  const hasBackCustomization = backImage || backText
  const hasShoulderCustomization = leftShoulderImage || leftShoulderText || rightShoulderImage || rightShoulderText

  const frontCustomizationPrice = hasFrontCustomization ? 15.0 : 0
  const backCustomizationPrice = hasBackCustomization ? 12.0 : 0
  const shoulderCustomizationPrice = hasShoulderCustomization ? 8.0 : 0
  const totalPrice = basePrice + frontCustomizationPrice + backCustomizationPrice + shoulderCustomizationPrice

  const hasAnyCustomization = hasFrontCustomization || hasBackCustomization || hasShoulderCustomization

  const handleAddToCart = () => {
    setIsAdding(true)

    addItem({
      productId: 'classic-hoodie',
      name: 'Classic Hoodie',
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
      price: totalPrice,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
      customization: hasAnyCustomization
        ? {
            decalImage,
            decalPosition,
            decalScale,
            decalRotation,
            textValue,
            textFont,
            textColor,
            textPosition,
            textScale,
            textRotation,
            backImage,
            backText,
            backTextFont,
            backTextColor,
            backPosition,
            backScale,
            backRotation,
            leftShoulderImage,
            leftShoulderText,
            leftShoulderTextFont,
            leftShoulderTextColor,
            leftShoulderPosition,
            leftShoulderScale,
            leftShoulderRotation,
            rightShoulderImage,
            rightShoulderText,
            rightShoulderTextFont,
            rightShoulderTextColor,
            rightShoulderPosition,
            rightShoulderScale,
            rightShoulderRotation,
          }
        : undefined,
    })

    setTimeout(() => {
      setIsAdding(false)
      resetCustomizer()
    }, 500)
  }

  return (
    <Layout hideFooter>
      <div className="h-[calc(100vh-80px)] flex flex-col lg:flex-row">
        {/* 3D Canvas */}
        <div className="flex-1 p-4 lg:p-6 min-h-[50vh] lg:min-h-0">
          <HoodieCanvas />
        </div>

        {/* Controls Panel */}
        <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-neutral-200 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">
                Design Your Hoodie
              </h1>
              <p className="text-neutral-500 mt-1">
                Choose a placement and add your design
              </p>
            </div>

            {/* Unified Placement Customizer */}
            <PlacementCustomizer />

            {/* Color Selection */}
            <div>
              <ColorPicker />
            </div>

            {/* Size Selection */}
            <SizeSelector
              sizes={sizes}
              selectedSize={selectedSize}
              onSelect={setSelectedSize}
            />

            {/* Price Summary */}
            <div className="bg-neutral-50 rounded-xl p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Base Hoodie</span>
                <span className="font-medium">${basePrice.toFixed(2)}</span>
              </div>
              {hasFrontCustomization && (
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Front Design</span>
                  <span className="font-medium">
                    +${frontCustomizationPrice.toFixed(2)}
                  </span>
                </div>
              )}
              {hasBackCustomization && (
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Back Design</span>
                  <span className="font-medium">
                    +${backCustomizationPrice.toFixed(2)}
                  </span>
                </div>
              )}
              {hasShoulderCustomization && (
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Shoulder Design</span>
                  <span className="font-medium">
                    +${shoulderCustomizationPrice.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-base font-semibold border-t border-neutral-200 pt-2">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="btn-primary w-full disabled:opacity-50"
            >
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </button>

            {/* Back to Products */}
            <button
              onClick={() => navigate('/products')}
              className="btn-ghost w-full"
            >
              Browse Other Styles
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
