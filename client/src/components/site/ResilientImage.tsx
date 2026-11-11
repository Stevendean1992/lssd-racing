import { useEffect, useState, type ImgHTMLAttributes } from "react";

const PORTABLE_FALLBACK = "/bg-concept-v1.jpg";

type ResilientImageProps = ImgHTMLAttributes<HTMLImageElement>;

export default function ResilientImage({ src, onError, ...props }: ResilientImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      src={currentSrc}
      onError={event => {
        onError?.(event);
        if (currentSrc !== PORTABLE_FALLBACK) {
          setCurrentSrc(PORTABLE_FALLBACK);
        }
      }}
    />
  );
}
