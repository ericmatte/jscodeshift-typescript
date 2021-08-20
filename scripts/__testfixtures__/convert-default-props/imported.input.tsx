import { forwardRef, memo } from "react";

import {
  propTypes as buttonBasePropTypes,
  defaultProps as buttonBaseDefaultProps,
} from "../ButtonBase";

const propTypes = buttonBasePropTypes;

const defaultProps = buttonBaseDefaultProps;

// prettier-ignore
const SimpleButton = forwardRef(({ children, ...innerProps }, ref) => (
  <button ref={ref}  {...innerProps}>
    {children}
  </button>
));

SimpleButton.propTypes = propTypes;
SimpleButton.defaultProps = defaultProps;
SimpleButton.displayName = "SimpleButton";

export default memo(SimpleButton);
