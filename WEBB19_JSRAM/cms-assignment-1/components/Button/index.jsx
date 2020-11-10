import { StyledOrangeButton } from "./style";
import Link from "next/link";

const handleLinkWrapping = (Component, props) => {
  const { href, children, disabled, isLoading, ...rest } = props;
  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );

  if (href)
    return (
      <Link href={href} passHref>
        {button}
      </Link>
    );

  return button;
};

// export const Button = (props) => handleLinkWrapping(StyledButton, props);

export const OrangeButton = (props) =>
  handleLinkWrapping(StyledOrangeButton, props);
