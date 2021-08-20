import { forwardRef } from "react";
import classNames from "classnames";

export enum COLORS {
  danger,
  success,
  warning,
  default,
  info,
}

export const sizes = ["sm", "md", "lg"] as const;

type Props = {
  isOpen?: boolean;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  size?: typeof sizes[number];
  block?: boolean;
  id?: string;
  color?: COLORS;
};

// prettier-ignore
const Dropdown = forwardRef<HTMLDivElement, Props>(
  (
    {
      isOpen: initialOpenState = false,
      className = null,
      children,
      active = false,
      disabled = false,
      size = "md",
      block = false,
      id = null,
      color = COLORS.default
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(className, "tw-relative tw-text-left", {
          "tw-inline-block": !block,
          "tw-block": block,
        })}
      >
        {children}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
