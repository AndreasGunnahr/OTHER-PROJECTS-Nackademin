import { StyledOrangeButton,StyledOrangeLinkButton } from "./style";

const handleLinkWrapping = (Component, props) => {
  const { href, children, disabled, isLoading, ...rest } = props;
  const button = (
    <Component to={href} disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );

  return button;
};

// export const Button = (props) => handleLinkWrapping(StyledButton, props);

export const OrangeButton = (props) =>
  handleLinkWrapping(StyledOrangeButton, props);

export const OrangeLinkButton = (props) =>
  handleLinkWrapping(StyledOrangeLinkButton, props);
