import { StyledOrangeButton } from "./style";
import { A } from "components/Shared";

const handleLinkWrapping = (Component, props) => {
  const { href, children, disabled, isLoading, ...rest } = props;
  const button = (
    <Component href={href} disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );

  return button;
};

export const Button = (props) => handleLinkWrapping(StyledButton, props);

export const OrangeButton = (props) =>
  handleLinkWrapping(StyledOrangeButton, props);
