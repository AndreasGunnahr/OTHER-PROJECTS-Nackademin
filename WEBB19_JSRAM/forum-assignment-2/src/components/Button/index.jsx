import { StyledButton } from "./style";
// import { Link } from "react-router-dom";

const handleLinkWrapping = (Component, props) => {
  const { href, children, disabled, isLoading, ...rest } = props;
  const button = (
    <Component to={href} disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );

  return button;
};

export const Button = (props) => handleLinkWrapping(StyledButton, props);
