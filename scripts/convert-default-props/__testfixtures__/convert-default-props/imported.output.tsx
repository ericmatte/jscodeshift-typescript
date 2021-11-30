import { forwardRef, memo } from "react";

import {
  propTypes as buttonBasePropTypes,
  defaultProps as buttonBaseDefaultProps,
} from "../ButtonBase";

const propTypes = buttonBasePropTypes;

const defaultProps = buttonBaseDefaultProps; /** TODO: Add to SimpleButton */

// prettier-ignore
const SimpleButton = forwardRef(({ children, ...innerProps }, ref) => (
  <button ref={ref}  {...innerProps}>
    {children}
  </button>
));

SimpleButton.propTypes = propTypes;
SimpleButton.displayName = "SimpleButton";

export default memo(SimpleButton);
