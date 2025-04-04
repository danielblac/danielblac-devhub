interface ButtonProps {
  children: React.ReactNode;
  padding?: string;
  backgroundColor?: string;
  onClick?: (e: unknown) => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  onClick,
  type,
  padding,
  color,
}) => {
  return (
    <button
      className="global-button"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "#FF7C2C",
        padding: padding ? padding : "0.5em 0.6em",
        color: color ? color : "#FFF",
      }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
