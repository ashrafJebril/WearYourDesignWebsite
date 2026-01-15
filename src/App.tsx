import { Routes, Route } from 'react-router-dom'
import {
  HomePage,
  ProductsPage,
  ProductDetailPage,
  CustomizerPage,
  CartPage,
  CheckoutPage,
  NotFoundPage,
} from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<ProductDetailPage />} />
      <Route path="/customize" element={<CustomizerPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
