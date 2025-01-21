import cn from "classnames";
import styles from "@components/Button/Button.module.css";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size: "small" | "large";
  children: React.ReactNode;
}

export const Button = ({ size, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.small]: size === "small",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
