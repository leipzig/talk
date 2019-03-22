import cn from "classnames";
import React, { StatelessComponent } from "react";

import { withStyles } from "talk-ui/hocs";

import styles from "./TableBody.css";

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes: typeof styles;
}

const TableBody: StatelessComponent<Props> = ({
  classes,
  className,
  children,
  ...rest
}) => {
  const rootClassName = cn(classes.root, className);
  return (
    <tbody className={rootClassName} {...rest}>
      {children}
    </tbody>
  );
};

const enhanced = withStyles(styles)(TableBody);
export default enhanced;