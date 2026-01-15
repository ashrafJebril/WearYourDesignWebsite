import { useRef } from 'react'
import { useCustomizerStore, AVAILABLE_FONTS, PlacementArea } from '../../store/useCustomizerStore'

const TEXT_COLORS = [
  { name: 'White', hex: '#ffffff' },
  { name: 'Black', hex: '#000000' },
  { name: 'Red', hex: '#ef4444' },
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Green', hex: '#22c55e' },
  { name: 'Yellow', hex: '#eab308' },
  { name: 'Purple', hex: '#a855f7' },
  { name: 'Orange', hex: '#f97316' },
]

const PLACEMENT_TABS: { id: PlacementArea; label: string }[] = [
  { id: 'front', label: 'Front' },
  { id: 'back', label: 'Back' },
  { id: 'leftShoulder', label: 'Left' },
  { id: 'rightShoulder', label: 'Right' },
]

export function PlacementCustomizer() {
  const frontFileRef = useRef<HTMLInputElement>(null)
  const backFileRef = useRef<HTMLInputElement>(null)
  const leftFileRef = useRef<HTMLInputElement>(null)
  const rightFileRef = useRef<HTMLInputElement>(null)

  const {
    activePlacement,
    setActivePlacement,
    // Front
    decalImage,
    setDecalImage,
    decalPosition,
    setDecalPosition,
    decalScale,
    setDecalScale,
    decalRotation,
    setDecalRotation,
    textValue,
    setTextValue,
    textFont,
    setTextFont,
    textColor,
    setTextColor,
    textPosition,
    setTextPosition,
    textScale,
    setTextScale,
    textRotation,
    setTextRotation,
    // Back
    backImage,
    setBackImage,
    backText,
    setBackText,
    backTextFont,
    setBackTextFont,
    backTextColor,
    setBackTextColor,
    backPosition,
    setBackPosition,
    backScale,
    setBackScale,
    backRotation,
    setBackRotation,
    // Left shoulder
    leftShoulderImage,
    setLeftShoulderImage,
    leftShoulderText,
    setLeftShoulderText,
    leftShoulderTextFont,
    setLeftShoulderTextFont,
    leftShoulderTextColor,
    setLeftShoulderTextColor,
    leftShoulderPosition,
    setLeftShoulderPosition,
    leftShoulderScale,
    setLeftShoulderScale,
    leftShoulderRotation,
    setLeftShoulderRotation,
    // Right shoulder
    rightShoulderImage,
    setRightShoulderImage,
    rightShoulderText,
    setRightShoulderText,
    rightShoulderTextFont,
    setRightShoulderTextFont,
    rightShoulderTextColor,
    setRightShoulderTextColor,
    rightShoulderPosition,
    setRightShoulderPosition,
    rightShoulderScale,
    setRightShoulderScale,
    rightShoulderRotation,
    setRightShoulderRotation,
  } = useCustomizerStore()

  // Get current placement's data
  const getPlacementData = () => {
    switch (activePlacement) {
      case 'front':
        return {
          image: decalImage,
          setImage: setDecalImage,
          text: textValue,
          setText: setTextValue,
          textFont: textFont,
          setTextFont: setTextFont,
          textColor: textColor,
          setTextColor: setTextColor,
          position: { x: decalPosition.x, y: decalPosition.y },
          setPosition: (pos: Partial<{ x: number; y: number }>) => setDecalPosition(pos),
          scale: decalScale,
          setScale: setDecalScale,
          rotation: decalRotation,
          setRotation: setDecalRotation,
          textPosition: textPosition,
          setTextPosition: setTextPosition,
          textScale: textScale,
          setTextScale: setTextScale,
          textRotation: textRotation,
          setTextRotation: setTextRotation,
          fileRef: frontFileRef,
          positionRange: { xMin: -10, xMax: 10, yMin: -100, yMax: 40 },
          hasTextPosition: true,
        }
      case 'back':
        return {
          image: backImage,
          setImage: setBackImage,
          text: backText,
          setText: setBackText,
          textFont: backTextFont,
          setTextFont: setBackTextFont,
          textColor: backTextColor,
          setTextColor: setBackTextColor,
          position: backPosition,
          setPosition: setBackPosition,
          scale: backScale,
          setScale: setBackScale,
          rotation: backRotation,
          setRotation: setBackRotation,
          textPosition: backPosition,
          setTextPosition: setBackPosition,
          textScale: backScale,
          setTextScale: setBackScale,
          textRotation: backRotation,
          setTextRotation: setBackRotation,
          fileRef: backFileRef,
          positionRange: { xMin: -10, xMax: 10, yMin: -100, yMax: 40 },
          hasTextPosition: false,
        }
      case 'leftShoulder':
        return {
          image: leftShoulderImage,
          setImage: setLeftShoulderImage,
          text: leftShoulderText,
          setText: setLeftShoulderText,
          textFont: leftShoulderTextFont,
          setTextFont: setLeftShoulderTextFont,
          textColor: leftShoulderTextColor,
          setTextColor: setLeftShoulderTextColor,
          position: leftShoulderPosition,
          setPosition: setLeftShoulderPosition,
          scale: leftShoulderScale,
          setScale: setLeftShoulderScale,
          rotation: leftShoulderRotation,
          setRotation: setLeftShoulderRotation,
          textPosition: leftShoulderPosition,
          setTextPosition: setLeftShoulderPosition,
          textScale: leftShoulderScale,
          setTextScale: setLeftShoulderScale,
          textRotation: leftShoulderRotation,
          setTextRotation: setLeftShoulderRotation,
          fileRef: leftFileRef,
          positionRange: { xMin: -30, xMax: 30, yMin: -30, yMax: 30 },
          hasTextPosition: false,
        }
      case 'rightShoulder':
        return {
          image: rightShoulderImage,
          setImage: setRightShoulderImage,
          text: rightShoulderText,
          setText: setRightShoulderText,
          textFont: rightShoulderTextFont,
          setTextFont: setRightShoulderTextFont,
          textColor: rightShoulderTextColor,
          setTextColor: setRightShoulderTextColor,
          position: rightShoulderPosition,
          setPosition: setRightShoulderPosition,
          scale: rightShoulderScale,
          setScale: setRightShoulderScale,
          rotation: rightShoulderRotation,
          setRotation: setRightShoulderRotation,
          textPosition: rightShoulderPosition,
          setTextPosition: setRightShoulderPosition,
          textScale: rightShoulderScale,
          setTextScale: setRightShoulderScale,
          textRotation: rightShoulderRotation,
          setTextRotation: setRightShoulderRotation,
          fileRef: rightFileRef,
          positionRange: { xMin: -30, xMax: 30, yMin: -30, yMax: 30 },
          hasTextPosition: false,
        }
    }
  }

  const data = getPlacementData()

  // Check if each placement has content (for indicator dots)
  const hasContent = (placement: PlacementArea): boolean => {
    switch (placement) {
      case 'front':
        return !!(decalImage || textValue)
      case 'back':
        return !!(backImage || backText)
      case 'leftShoulder':
        return !!(leftShoulderImage || leftShoulderText)
      case 'rightShoulder':
        return !!(rightShoulderImage || rightShoulderText)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be less than 5MB')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      console.log(`Uploading to ${activePlacement}`)
      data.setImage(event.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleReset = () => {
    data.setPosition({ x: 0, y: activePlacement === 'front' ? -10 : 0 })
    data.setScale(activePlacement === 'front' ? 0.6 : 0.5)
    data.setRotation(0)
  }

  const handleClear = () => {
    data.setImage(null)
    data.setText('')
    if (data.fileRef.current) {
      data.fileRef.current.value = ''
    }
  }

  const currentHasContent = data.image || data.text

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700">Design Placement</h3>

      {/* Placement Tabs */}
      <div className="flex rounded-lg bg-neutral-100 p-1">
        {PLACEMENT_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActivePlacement(tab.id)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors relative ${
              activePlacement === tab.id
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {tab.label}
            {hasContent(tab.id) && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Hidden file inputs for each placement */}
      <input
        ref={frontFileRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        ref={backFileRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        ref={leftFileRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        ref={rightFileRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Image Upload */}
      <div>
        <label className="block text-sm text-neutral-600 mb-2">Upload Image</label>
        {data.image ? (
          <div className="relative">
            <img
              src={data.image}
              alt={`${activePlacement} design`}
              className="w-full h-24 object-contain bg-neutral-100 rounded-lg"
            />
            <button
              onClick={() => {
                data.setImage(null)
                if (data.fileRef.current) data.fileRef.current.value = ''
              }}
              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <button
            onClick={() => data.fileRef.current?.click()}
            className="w-full py-3 border-2 border-dashed border-neutral-300 rounded-lg text-sm text-neutral-600 hover:border-neutral-400 hover:text-neutral-700 transition-colors"
          >
            Click to upload image
          </button>
        )}
      </div>

      {/* Text Input */}
      <div>
        <label className="block text-sm text-neutral-600 mb-2">Add Text</label>
        <input
          type="text"
          value={data.text}
          onChange={(e) => data.setText(e.target.value)}
          placeholder="Enter text..."
          maxLength={20}
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none text-sm"
        />
        <p className="text-xs text-neutral-400 mt-1">{data.text.length}/20 characters</p>
      </div>

      {/* Font Selector - only show if text entered */}
      {data.text && (
        <div>
          <label className="block text-sm text-neutral-600 mb-2">Font</label>
          <select
            value={data.textFont}
            onChange={(e) => data.setTextFont(e.target.value)}
            className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none bg-white text-sm"
          >
            {AVAILABLE_FONTS.map((font) => (
              <option key={font.value} value={font.value}>
                {font.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Text Color - only show if text entered */}
      {data.text && (
        <div>
          <label className="block text-sm text-neutral-600 mb-2">Text Color</label>
          <div className="flex flex-wrap gap-2">
            {TEXT_COLORS.map((color) => (
              <button
                key={color.hex}
                onClick={() => data.setTextColor(color.hex)}
                className={`w-6 h-6 rounded-full border-2 transition-transform ${
                  data.textColor === color.hex
                    ? 'border-neutral-900 scale-110'
                    : 'border-neutral-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Position & Scale Controls - only show if content exists */}
      {currentHasContent && (
        <div className="space-y-3 pt-3 border-t border-neutral-200">
          {/* Image Position Controls */}
          {data.image && (
            <>
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Image Position</p>

              {/* Horizontal Position */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Horizontal</label>
                  <span className="text-xs text-neutral-500">{data.position.x.toFixed(0)}</span>
                </div>
                <input
                  type="range"
                  min={data.positionRange.xMin}
                  max={data.positionRange.xMax}
                  step={1}
                  value={data.position.x}
                  onChange={(e) => data.setPosition({ x: parseFloat(e.target.value) })}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>

              {/* Vertical Position */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Vertical</label>
                  <span className="text-xs text-neutral-500">{data.position.y.toFixed(0)}</span>
                </div>
                <input
                  type="range"
                  min={data.positionRange.yMin}
                  max={data.positionRange.yMax}
                  step={1}
                  value={data.position.y}
                  onChange={(e) => data.setPosition({ y: parseFloat(e.target.value) })}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>

              {/* Scale */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Size</label>
                  <span className="text-xs text-neutral-500">{Math.round(data.scale * 100)}%</span>
                </div>
                <input
                  type="range"
                  min={0.2}
                  max={1.0}
                  step={0.01}
                  value={data.scale}
                  onChange={(e) => data.setScale(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>

              {/* Rotation */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Rotation</label>
                  <span className="text-xs text-neutral-500">{data.rotation}°</span>
                </div>
                <input
                  type="range"
                  min={-180}
                  max={180}
                  step={1}
                  value={data.rotation}
                  onChange={(e) => data.setRotation(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>
            </>
          )}

          {/* Text Position Controls - separate from image for front */}
          {data.text && data.hasTextPosition && (
            <>
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mt-4">Text Position</p>

              {/* Text Horizontal */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Horizontal</label>
                  <span className="text-xs text-neutral-500">{data.textPosition.x.toFixed(0)}</span>
                </div>
                <input
                  type="range"
                  min={data.positionRange.xMin}
                  max={data.positionRange.xMax}
                  step={1}
                  value={data.textPosition.x}
                  onChange={(e) => data.setTextPosition({ x: parseFloat(e.target.value) })}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>

              {/* Text Vertical */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Vertical</label>
                  <span className="text-xs text-neutral-500">{data.textPosition.y.toFixed(0)}</span>
                </div>
                <input
                  type="range"
                  min={data.positionRange.yMin}
                  max={data.positionRange.yMax}
                  step={1}
                  value={data.textPosition.y}
                  onChange={(e) => data.setTextPosition({ y: parseFloat(e.target.value) })}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>

              {/* Text Scale */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Text Size</label>
                  <span className="text-xs text-neutral-500">{Math.round(data.textScale * 100)}%</span>
                </div>
                <input
                  type="range"
                  min={0.2}
                  max={1.0}
                  step={0.01}
                  value={data.textScale}
                  onChange={(e) => data.setTextScale(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>

              {/* Text Rotation */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Text Rotation</label>
                  <span className="text-xs text-neutral-500">{data.textRotation}°</span>
                </div>
                <input
                  type="range"
                  min={-180}
                  max={180}
                  step={1}
                  value={data.textRotation}
                  onChange={(e) => data.setTextRotation(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>
            </>
          )}

          {/* Text-only position controls for non-front placements */}
          {data.text && !data.hasTextPosition && !data.image && (
            <>
              {/* Horizontal Position */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Horizontal</label>
                  <span className="text-xs text-neutral-500">{data.position.x.toFixed(0)}</span>
                </div>
                <input
                  type="range"
                  min={data.positionRange.xMin}
                  max={data.positionRange.xMax}
                  step={1}
                  value={data.position.x}
                  onChange={(e) => data.setPosition({ x: parseFloat(e.target.value) })}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>

              {/* Vertical Position */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Vertical</label>
                  <span className="text-xs text-neutral-500">{data.position.y.toFixed(0)}</span>
                </div>
                <input
                  type="range"
                  min={data.positionRange.yMin}
                  max={data.positionRange.yMax}
                  step={1}
                  value={data.position.y}
                  onChange={(e) => data.setPosition({ y: parseFloat(e.target.value) })}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>

              {/* Scale */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Size</label>
                  <span className="text-xs text-neutral-500">{Math.round(data.scale * 100)}%</span>
                </div>
                <input
                  type="range"
                  min={0.2}
                  max={1.0}
                  step={0.01}
                  value={data.scale}
                  onChange={(e) => data.setScale(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>

              {/* Rotation */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-neutral-600">Rotation</label>
                  <span className="text-xs text-neutral-500">{data.rotation}°</span>
                </div>
                <input
                  type="range"
                  min={-180}
                  max={180}
                  step={1}
                  value={data.rotation}
                  onChange={(e) => data.setRotation(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleReset}
              className="flex-1 py-1.5 text-xs text-neutral-600 hover:text-neutral-900 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Reset Position
            </button>
            <button
              onClick={handleClear}
              className="flex-1 py-1.5 text-xs text-red-600 hover:text-red-700 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
