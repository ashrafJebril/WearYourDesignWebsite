interface SizeSelectorProps {
  sizes: string[]
  selectedSize: string
  onSelect: (size: string) => void
}

export function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-neutral-900">Size</span>
        <button className="text-sm text-neutral-500 hover:text-neutral-900 underline">
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
              selectedSize === size
                ? 'border-neutral-900 bg-neutral-900 text-white'
                : 'border-neutral-200 text-neutral-700 hover:border-neutral-900'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
