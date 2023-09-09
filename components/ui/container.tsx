import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export type ContainerProps = {
  children: React.ReactNode;
};

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <section ref={ref} {...props} className={cn("mx-auto max-w-7xl")}>
        {children}
      </section>
    );
  }
);

Container.displayName = "Container";

export default Container;
