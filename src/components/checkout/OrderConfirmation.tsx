import { Link } from 'react-router-dom'

interface OrderConfirmationProps {
  orderNumber: string
}

export function OrderConfirmation({ orderNumber }: OrderConfirmationProps) {
  return (
    <div className="text-center py-12">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          className="w-10 h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-neutral-900 mb-2">
        Thank You for Your Order!
      </h1>
      <p className="text-neutral-600 mb-6">
        Your order has been placed successfully.
      </p>

      <div className="bg-neutral-50 rounded-xl p-6 max-w-md mx-auto mb-8">
        <p className="text-sm text-neutral-500 mb-1">Order Number</p>
        <p className="text-xl font-mono font-semibold text-neutral-900">
          {orderNumber}
        </p>
      </div>

      <p className="text-sm text-neutral-500 mb-8 max-w-md mx-auto">
        We've sent a confirmation email with your order details. Your custom
        hoodie will be printed and shipped within 3-5 business days.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/products" className="btn-primary">
          Continue Shopping
        </Link>
        <Link to="/" className="btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
