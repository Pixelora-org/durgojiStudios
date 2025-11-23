import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function ImageWithFallback({ 
  src, 
  alt, 
  style, 
  className, 
  loading = 'lazy',
  fetchPriority = 'auto',
  ...rest 
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setDidError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <div className="relative" style={style}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#1A1A1A] animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#F2C94C]/20 border-t-[#F2C94C] rounded-full animate-spin"></div>
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`${className ?? ''} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        {...rest} 
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}
