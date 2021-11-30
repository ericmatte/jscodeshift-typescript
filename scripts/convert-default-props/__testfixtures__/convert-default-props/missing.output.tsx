import classNames from "classnames";

import { Link, baseDefaultProps } from "$shared";

type LoadingProps = {
  className?: string;
  variant?: "default" | "transparent";
};

// prettier-ignore
export const Loading = ({
  className,
  variant = "default"
}: LoadingProps) => (
  <div
    className={classNames(className, "Loading", {
      "Loading--default": variant === "default",
      "Loading--transparent": variant === "transparent",
    })}
  />
);

// prettier-ignore
Loading.defaultProps = {
  size: "md" /** TODO: Add to Loading */,
  ...baseDefaultProps /** TODO: To be validated */
};

type Props = {
  to: string | any;
  replace?: boolean;
  innerRef?: (...args: any[]) => any;
  className?: string;
};

// prettier-ignore
const defaultProps = {
  replace: null /** TODO: Add to BackLink */,
  innerRef: null /** TODO: Add to BackLink */
};

// prettier-ignore
const BackLink = ({
  className = null,
  ...restProps
}: Props) => (
  <div className={className}>
    <Link {...restProps}>Back</Link>
  </div>
);

export default BackLink;
