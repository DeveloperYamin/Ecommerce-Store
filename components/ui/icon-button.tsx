import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
}

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, icon, ...props }, ref) => {
    return (
      <button
        onClick={onClick}
        className={cn(
          "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
          className
        )}
        {...props}
        ref={ref}
      >
        {icon}
      </button>
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton };
