import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { colors } from "../utils/colors";
import PropTypes from "prop-types";
import { CgAirplane } from "react-icons/cg";
import { jShine, ohHappiness } from "../utils/themes";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 14px;
    padding: 8px 26px;
    border-radius: 24px;
  `,
  regular: () => `
    font-size: 22px;
    padding: 18px 48px;
    border-radius: 24px;
  `,
  large: () => `
    font-size: 27px;
    padding: 24px 64px;
    border-radius: 24px;
  `,
};

const StyledButton = styled.button`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  min-width: 100px;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0px 5px 7px rgba(149, 149, 149, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background: ${(props) => props.theme.primaryColor};
  color: ${colors.white};
  border: none;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background: ${colors.white};
  color: ${colors.black};
  position: relative;
  border: 4px solid transparent;
  border-radius: 24px;
  background-clip: padding-box;
  padding: 5px;

  &:after {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: ${(props) => props.theme.primaryColor};
    content: "";
    z-index: -1;
    border-radius: 24px;
  }

  &:hover {
    position: relative;
    border: 4px solid transparent;
    border-radius: 24px;
    background-clip: padding-box;
  }

  &:disabled {
    position: relative;
    border: 4px solid transparent;
    border-radius: 24px;
    background-clip: padding-box;
  }

  &:hover:after {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: ${(props) => props.theme.primaryColor};
    content: "";
    z-index: -1;
    border-radius: 24px;
  }

  &:disabled:after {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: ${(props) => props.theme.primaryColor};
    content: "";
    z-index: -1;
    border-radius: 24px;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const PrimaryButton = (props) => {
  const Icon = props.icon;
  return (
    <StyledPrimaryButton
      {...props}
      style={{
        display: `${props.icon ? "flex" : ""}`,
        alignItems: "center",
        gap: "12px",
        flexDirection: `${props.isLeft ? "row-reverse" : "row"}`,
      }}
    >
      {props.children}
      {props.icon && (
        <Icon size={`${props.modifiers == "small" ? "25" : "35"}`} />
      )}
    </StyledPrimaryButton>
  );
};

PrimaryButton.propTypes = {
  icon: PropTypes.element,
};

export const SecondaryButton = (props) => {
  const Icon = props.icon;
  return (
    <StyledSecondaryButton
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flexDirection: `${props.isLeft ? "row-reverse" : "row"}`,
      }}
    >
      {props.children}
      <Icon size={`${props.modifiers == "small" ? "25" : "35"}`} />
    </StyledSecondaryButton>
  );
};

SecondaryButton.propTypes = {
  icon: PropTypes.element,
};

PrimaryButton.defaultProps = {
  isLeft: false,
  children: "Click Me",
  theme: ohHappiness,
  modifiers: "regular",
};

SecondaryButton.defaultProps = {
  isLeft: false,
  children: "Click Me",
  theme: ohHappiness,
  icon: CgAirplane,
};
