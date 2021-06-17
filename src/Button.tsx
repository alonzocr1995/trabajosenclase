import React from "react";
import styles from "./Button.module.css";
import styled from "styled-components";

interface ButtonProps {
  disable?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, disable = false }) => {
  return (
    <StyledButton isDisable={disable} className={styles.btn}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ isDisable: boolean }>`
  margin-top: 20px;
  border-radius: 6px;
  padding: 8px 12px;
  background: ${(props) => (props.isDisable ? "#adacac" : "#195e19")};
  color: #333;
  font-size: 12px;
  line-height: 16px;
  border: none;
  box-shadow: ${(props) => (props.isDisable ? "none" : "0,0,0.75 #000")};
`;
