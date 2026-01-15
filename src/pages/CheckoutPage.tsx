import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components/layout'
import { ShippingForm, PaymentForm, OrderSummary, OrderConfirmation } from '../components/checkout'
import { useCartStore } from '../store/useCartStore'
import { ShippingInfo } from '../types'

type CheckoutStep = 'shipping' | 'payment' | 'confirmation'

export function CheckoutPage() {
  const navigate = useNavigate()
  const { items, clearCart } = useCartStore()
  const [step, setStep] = useState<CheckoutStep>('shipping')
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null)
  const [orderNumber, setOrderNumber] = useState('')

  // Redirect if cart is empty
  if (items.length === 0 && step !== 'confirmation') {
    navigate('/cart')
    return null
  }

  const handleShippingSubmit = (info: ShippingInfo) => {
    setShippingInfo(info)
    setStep('payment')
  }

  const handlePaymentSubmit = () => {
    // Generate mock order number
    const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`
    setOrderNumber(orderId)
    clearCart()
    setStep('confirmation')
  }

  const handleBack = () => {
    setStep('shipping')
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {step === 'confirmation' ? (
          <OrderConfirmation orderNumber={orderNumber} />
        ) : (
          <>
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4">
                <div
                  className={`flex items-center ${
                    step === 'shipping' ? 'text-neutral-900' : 'text-neutral-400'
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step === 'shipping'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    1
                  </span>
                  <span className="ml-2 hidden sm:block">Shipping</span>
                </div>

                <div className="w-12 h-px bg-neutral-300" />

                <div
                  className={`flex items-center ${
                    step === 'payment' ? 'text-neutral-900' : 'text-neutral-400'
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step === 'payment'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    2
                  </span>
                  <span className="ml-2 hidden sm:block">Payment</span>
                </div>

                <div className="w-12 h-px bg-neutral-300" />

                <div className="flex items-center text-neutral-400">
                  <span className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-sm font-medium text-neutral-600">
                    3
                  </span>
                  <span className="ml-2 hidden sm:block">Confirmation</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
                  {step === 'shipping' && (
                    <ShippingForm
                      onSubmit={handleShippingSubmit}
                      initialData={shippingInfo || undefined}
                    />
                  )}
                  {step === 'payment' && (
                    <PaymentForm
                      onSubmit={handlePaymentSubmit}
                      onBack={handleBack}
                    />
                  )}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <OrderSummary />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
