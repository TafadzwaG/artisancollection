import { cn } from "@/lib/utils";

type BrandLogoProps = {
  src: string;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
  /** Gold/light marks on a black PNG — use screen blend so the logo reads on dark backgrounds */
  blend?: boolean;
  /** Full graphic with its own background — skip the cream card wrapper */
  photo?: boolean;
  /** Tighter layout for grid cards */
  compact?: boolean;
};

const BrandLogo = ({
  src,
  alt,
  imageClassName,
  wrapperClassName,
  blend,
  photo,
  compact,
}: BrandLogoProps) => (
  <div
    className={cn(
      "inline-flex max-w-full",
      blend && "px-1 py-1",
      !blend &&
        !photo &&
        (compact
          ? "bg-cream/95 border border-border/60 shadow-card px-3 py-2 md:px-4 md:py-3"
          : "bg-cream border border-border/70 shadow-card px-6 py-4 md:px-8 md:py-5"),
      photo && "overflow-hidden rounded-sm shadow-luxe ring-1 ring-cream/20",
      wrapperClassName
    )}
  >
    <img
      src={src}
      alt={alt}
      className={cn("object-contain", imageClassName, blend && "mix-blend-screen")}
    />
  </div>
);

export default BrandLogo;
