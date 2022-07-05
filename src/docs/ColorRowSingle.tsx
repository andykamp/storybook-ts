import React from "react";
import styled from "styled-components";
import { Text } from "@geist-ui/core";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  width: 100%;
  padding: 16pt;
  span {
    color: ${(props) => (props.invert ? "#000" : "#fff")} !important;
  }

  background: ${(props) => props.color};
  border-top-right-radius: ${(props) => (props.isTopRow ? "6px" : "0px")};
  border-top-left-radius: ${(props) => (props.isTopRow ? "6px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.isBottomRow ? "6px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.isBottomRow ? "6px" : "0px")};
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 300px;
  padding: 40px;
  box-sizing: content-box;
`;

interface Props {
  hex: string;
  name: string;
  themePath: string;
  style: any;
  isTopRow: boolean;
  isBottomRow: boolean;
  invert: boolean;
}

export const ColorRowSingle = ({
  hex,
  name,
  themePath,
  isTopRow,
  isBottomRow,
  invert,
}: Props) => {
  return (
    <StyledContainer
      invert={invert}
      isTopRow={isTopRow}
      isBottomRow={isBottomRow}
      color={hex}
    >
      <Text span h4>
        {name}
      </Text>
      <Text span small>
        {themePath}
      </Text>
      <Text span small>
        {hex}
      </Text>
    </StyledContainer>
  );
};

ColorRowSingle.defaultProps = {};
