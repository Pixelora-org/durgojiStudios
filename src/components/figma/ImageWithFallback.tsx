import React, { useState, useEffect, useRef } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number | string;
  height?: number | string;
  sizes?: string;
  quality?: number;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  style, 
  className, 
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  sizes,
  quality = 85,
  ...rest 
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isInView, setIsInView] = useState(loading === 'eager')
  const imgRef = useRef<HTMLImageElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager' || isInView) return

    const currentRef = imgRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    )

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
    }
  }, [loading, isInView])

  const handleError = () => {
    setDidError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Generate srcset for responsive images if width is provided
  const generateSrcSet = () => {
    if (!width || typeof width === 'string') return undefined
    const baseWidth = typeof width === 'number' ? width : parseInt(width)
    return `${src}?w=${baseWidth} 1x, ${src}?w=${baseWidth * 2} 2x`
  }

  const imgStyle: React.CSSProperties = {
    ...style,
    ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
  }

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={imgStyle}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <div className="relative w-full h-full" style={{ ...imgStyle, maxWidth: '100%', overflow: 'hidden' }}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#1A1A1A] animate-pulse flex items-center justify-center z-10">
          <div className="w-12 h-12 border-4 border-[#F2C94C]/20 border-t-[#F2C94C] rounded-full animate-spin"></div>
        </div>
      )}
      {isInView && (
        <img 
          ref={imgRef}
          src={src} 
          alt={alt || ''}
          className={`${className ?? ''} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
          sizes={sizes}
          srcSet={generateSrcSet()}
          style={imgStyle}
          {...rest} 
          onError={handleError}
          onLoad={handleLoad}
        />
      )}
      {!isInView && (
        <div 
          ref={imgRef}
          className={`${className ?? ''} bg-[#1A1A1A] animate-pulse`}
          style={imgStyle}
          aria-label={alt}
        />
      )}
    </div>
  )
}
