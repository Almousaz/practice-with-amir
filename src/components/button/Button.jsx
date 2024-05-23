import React, { memo } from "react";
import styles from "./button.module.scss"

const Button = ({ onClick, children, title, isLoading }) => {
  console.log("button", "rerender");

  return (
    <>
      <button className={styles.button}  disabled={isLoading} onClick={onClick}>
        {isLoading ? (
          <span>"loading ..."</span>
        ) : (
          <> {children ? children : <span>{title}</span>}</>
        )}
      </button>
    </>
  );
};

export default memo(Button);
