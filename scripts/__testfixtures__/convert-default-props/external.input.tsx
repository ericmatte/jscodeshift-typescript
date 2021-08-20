import classNames from "classnames";

import { Select } from "$shared";

type LoadingProps = {
  className?: string;
  variant?: "default" | "transparent";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const loadingDefaultProps = {
  variant: "default",
  size: "md",
};

// prettier-ignore
export const Loading = ({ className, variant, size }: LoadingProps) => (
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

Loading.defaultProps = loadingDefaultProps;

type Props = {
  value: string;
  onChange: (...args: any[]) => any;
  countries?: any[];
  disabled?: boolean;
  defaultValue?: boolean;
};

const defaultProps = {
  disabled: false,
  defaultValue: undefined,
  countries: [],
};

// prettier-ignore
const CountrySelect = ({ value, onChange, countries, disabled, defaultValue, ...props }: Props) => {
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

CountrySelect.defaultProps = defaultProps;

export default CountrySelect;
