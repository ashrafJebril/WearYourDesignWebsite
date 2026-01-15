export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  featured: boolean
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  basePrice: number
  customizationPrice: number
  images: string[]
  colors: ProductColor[]
  sizes: string[]
  features: string[]
  category: string
  tags: string[]
  inStock: boolean
  customizable: boolean
}

export interface ProductColor {
  id: string
  name: string
  hex: string
}

export interface CartItem {
  id: string
  productId: string
  name: string
  color: ProductColor
  size: string
  quantity: number
  price: number
  image: string
  customization?: CustomizationData
}

export interface CustomizationData {
  // Front customization
  decalImage: string | null
  decalPosition: { x: number; y: number; z: number }
  decalScale: number
  decalRotation: number
  textValue?: string
  textFont?: string
  textColor?: string
  textPosition?: { x: number; y: number }
  textScale?: number
  textRotation?: number

  // Back customization
  backImage?: string | null
  backText?: string
  backTextFont?: string
  backTextColor?: string
  backPosition?: { x: number; y: number }
  backScale?: number
  backRotation?: number

  // Left shoulder customization
  leftShoulderImage?: string | null
  leftShoulderText?: string
  leftShoulderTextFont?: string
  leftShoulderTextColor?: string
  leftShoulderPosition?: { x: number; y: number }
  leftShoulderScale?: number
  leftShoulderRotation?: number

  // Right shoulder customization
  rightShoulderImage?: string | null
  rightShoulderText?: string
  rightShoulderTextFont?: string
  rightShoulderTextColor?: string
  rightShoulderPosition?: { x: number; y: number }
  rightShoulderScale?: number
  rightShoulderRotation?: number
}

export interface CustomizerState {
  hoodieColor: string
  decalImage: string | null
  decalPosition: { x: number; y: number; z: number }
  decalScale: number
  decalRotation: number
  selectedSize: string
  selectedColor: ProductColor
  isLoading: boolean
}

export interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface OrderSummary {
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
}
