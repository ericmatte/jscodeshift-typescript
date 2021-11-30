import classNames from "classnames";

import { Select } from "$shared";

type LoadingProps = {
  className?: string;
  variant?: "default" | "transparent";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

// prettier-ignore
export const Loading = ({
  className,
  variant = "default",
  size = "md"
}: LoadingProps) => (
  <div
    className={classNames(className, "Loading", {
      "Loading--xs": size === "xs",
      "Loading--sm": size === "sm",
      "Loading--md": size === "md",
      "Loading--lg": size === "lg",
      "Loading--xl": size === "xl",
      "Loading--default": variant === "default",
      "Loading--transparent": variant === "transparent",
    })}
  />
);

type Props = {
  value: string;
  onChange: (...args: any[]) => any;
  countries?: any[];
  disabled?: boolean;
  defaultValue?: boolean;
};

// prettier-ignore
const CountrySelect = ({
  value,
  onChange,
  countries = [],
  disabled = false,
  defaultValue = undefined,
  ...props
}: Props) => {
  const options = [
    { value: "", hidden: !defaultValue, label: "Country" },
    ...countries.map((country) => ({ value: country.id, label: country.name })),
  ];
  return (
    <Select
      {...props}
      value={value}
      onChange={onChange}
      disabled={disabled}
      options={options}
      autoScroll
    />
  );
};

export default CountrySelect;
