import React from 'react';

import classNames from 'classnames';

interface ButtonInjectedProps {
  className: string;
  children: JSX.Element;
}
interface ButtonProps {
  color?: string;
  icon?: string;
  text?: string;
  className?: string;
  renderContainer: (props: ButtonInjectedProps) => JSX.Element;
  children?: React.ReactNode;
}

export function Button({
  color,
  text,
  children,
  className,
  renderContainer,
}: ButtonProps) {
  return renderContainer({
    className: classNames(color, className),
    children: (
      <div className="">
        {/* {icon && <Icon name={icon} />} */}
        {text && text}
        <div>{children}</div>
      </div>
    ),
  });
}
// NewButton.displayName = 'my-button';

const defaultProps: Pick<ButtonProps, 'renderContainer'> = {
  renderContainer: (props) => <button {...props} />,
};
Button.defaultProps = defaultProps;

// function getClassName(color = '', className = '') {
//   return `${color} ${className}`;
// }
