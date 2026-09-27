import type { CSSProperties } from "react";

type ArtImageProps = {
  src: string;
  mobileSrc?: string;
  alt: string;
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
  focal?: string;
  mobileFocal?: string;
  className?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "auto" | "sync";
};

export default function ArtImage({
  src,
  mobileSrc,
  alt,
  width,
  height,
  mobileWidth,
  mobileHeight,
  focal,
  mobileFocal,
  className,
  style,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
}: ArtImageProps) {
  const mobile = mobileSrc && mobileWidth && mobileHeight;

  const vars = {
    ...style,
    ...(focal ? ({ "--of": focal } as object) : null),
    ...(mobileFocal ? ({ "--of-m": mobileFocal } as object) : null),
  } as CSSProperties;

  return (
    <picture>
      {mobile ? (
        <source
          media="(max-width: 900px)"
          srcSet={mobileSrc}
          width={mobileWidth}
          height={mobileHeight}
        />
      ) : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={vars}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
      />
    </picture>
  );
}
