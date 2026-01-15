import { useCartStore } from '../../store/useCartStore'
import { CartItem } from '../cart/CartItem'

export function OrderSummary() {
  const { items, getTotalPrice } = useCartStore()
  const subtotal = getTotalPrice()
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="bg-neutral-50 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-neutral-900 mb-4">
        Order Summary
      </h2>

      {/* Items */}
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <CartItem key={item.id} item={item} showControls={false} />
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-3 border-t border-neutral-200 pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-neutral-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-neutral-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-neutral-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-base font-semibold border-t border-neutral-200 pt-3">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Free shipping notice */}
      {shipping > 0 && (
        <p className="text-xs text-neutral-500 mt-4">
          Add ${(100 - subtotal).toFixed(2)} more for free shipping!
        </p>
      )}
    </div>
  )
}
