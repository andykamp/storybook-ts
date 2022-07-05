import React from "react";
import styled from "styled-components";
import { Button as GeistButton } from "@geist-ui/core";

const StyledButton = styled(GeistButton)``;

interface Props {}

export const Button = ({}: Props) => {
  return <StyledButton>Action</StyledButton>;
};

Button.defaultProps = {};
