import React from "react";
import styled from "styled-components";
import { Text } from "@geist-ui/core";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
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

const StyledLight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  width: 100%;
  height: 100%;
  border-top-left-radius: ${(props) => (props.isTopRow ? "6px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.isBottomRow ? "6px" : "0px")};
`;

const StyledDark = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  width: 100%;
  height: 100%;
  border-top-right-radius: ${(props) => (props.isTopRow ? "6px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.isBottomRow ? "6px" : "0px")};
`;

interface Props {
  hexDark: string;
  hexLight: string;
  name: string;
  themePath: string;
  style: any;
  isTopRow: boolean;
  isBottomRow: boolean;
}

export const ColorRow = ({
  hexDark,
  hexLight,
  name,
  themePath,
  isTopRow,
  isBottomRow,
}: Props) => {
  return (
    <StyledContainer>
      <StyledInfo>
        <Text span b>
          {name}
        </Text>
        <Text span small>
          {themePath}
        </Text>
      </StyledInfo>
      <StyledLight
        isTopRow={isTopRow}
        isBottomRow={isBottomRow}
        color={hexDark}
      >
        {hexDark}
      </StyledLight>

      {hexDark != hexLight && (
        <StyledDark
          isTopRow={isTopRow}
          isBottomRow={isBottomRow}
          color={hexLight}
        >
          {hexLight}
        </StyledDark>
      )}
    </StyledContainer>
  );
};

ColorRow.defaultProps = {};
