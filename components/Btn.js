"use client";
import styles from "./Btn.module.scss";
export default function Btn({ as = "button", variant = "primary", children, className, ...rest }) {
  const Component = as === "button" ? "button" : "a";
  return (
    <Component className={`${styles.btn} ${styles?.[variant]} ${className}`} {...rest}>
      <span> {children}</span>
    </Component>
  );
}
