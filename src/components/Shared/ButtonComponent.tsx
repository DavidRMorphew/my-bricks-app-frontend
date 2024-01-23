import { ReactNode, memo } from "react";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const ButtonComponent = ({ children, ...props }: ButtonProps) => (
  <button {...props}>{children}</button>
);

const Button = memo(ButtonComponent);

export default Button;
