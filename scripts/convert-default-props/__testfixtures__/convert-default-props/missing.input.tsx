import classNames from "classnames";

import { Link, baseDefaultProps } from "$shared";

type LoadingProps = {
  className?: string;
  variant?: "default" | "transparent";
};

// prettier-ignore
export const Loading = ({ className, variant }: LoadingProps) => (
  <div
    className={classNames(className, "Loading", {
      "Loading--default": variant === "default",
      "Loading--transparent": variant === "transparent",
    })}
  />
);

// prettier-ignore
Loading.defaultProps = {
  variant: "default",
  size: "md",
  ...baseDefaultProps,
};

type Props = {
  to: string | any;
  replace?: boolean;
  innerRef?: (...args: any[]) => any;
  className?: string;
};

// prettier-ignore
const defaultProps = {
  className: null,
  replace: null,
  innerRef: null,
};

// prettier-ignore
const BackLink = ({ className, ...restProps }: Props) => (
  <div className={className}>
    <Link {...restProps}>Back</Link>
  </div>
);
BackLink.defaultProps = defaultProps;

export default BackLink;
