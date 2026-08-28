import React, { useState, useEffect, useRef } from 'react';
import './ImageWithSkeleton.css';

function ImageWithSkeleton({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  style = {},
  wrapperStyle = {},
  loading = 'lazy',
  decoding = 'async',
  onClick,
  showGlowBar = true,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Check if the image is already cached/completed
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div
      className={`skeleton-img-wrapper ${wrapperClassName}`}
      style={{ ...wrapperStyle }}
      onClick={onClick}
    >
      {/* Sleek Skeleton Shimmer Placeholder (Active while image is loading) */}
      {!isLoaded && !hasError && (
        <div className="skeleton-shimmer-bg">
          {showGlowBar && <div className="skeleton-glow-bar" />}
        </div>
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`skeleton-img-element ${isLoaded ? 'is-loaded' : ''} ${className}`}
        style={{ ...style }}
        loading={loading}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}

export default ImageWithSkeleton;
