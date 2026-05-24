import { cn } from "@/lib/utils";
import type { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "style"> & {
    style?: CSSProperties;
  };

const Reveal = <T extends ElementType = "div">({
  as,
  children,
  className,
  variant = "up",
  delay = 0,
  style,
  ...props
}: RevealProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      data-reveal={variant}
      className={cn("reveal", className)}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
