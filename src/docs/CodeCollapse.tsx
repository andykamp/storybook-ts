import React, { useState, ReactElement } from "react";
import styled from "styled-components";
import { Code } from "@geist-ui/core";

export const StyledPlaygroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.palette.accents_2};
    border-radius: 6px;
} 
`;
export const StyledPlaygroundCard = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: ${(props) => props.direction};
    align-items: ${(props) => props.textAlignment};
    justify-content: center;
} 
`;
const StyledPlaygroundBottom = styled.div`
  border-top: 1px solid ${(props) => props.theme.palette.accents_2};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  font-size: 12px;
  padding: 0 20px;
  color: ${(props) => props.theme.palette.accents_4};
  background: ${(props) => props.theme.palette.accents_1};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  content: ReactElement | string;
  code: string;
  direction: string;
  textAlignment: "flex-start" | "center" | "flex-end";
}

export const CodeCollapse = ({
  content,
  code,
  direction,
  textAlignment,
}: Props) => {
  const [showCode, setShowCode] = useState(false);
  const handler = () => {
    setShowCode(!showCode);
  };
  return (
    <StyledPlaygroundContainer>
      <StyledPlaygroundCard direction={direction} textAlignment={textAlignment}>
        {content}
      </StyledPlaygroundCard>
      <StyledPlaygroundBottom onClick={handler}>
        {"Code "}
      </StyledPlaygroundBottom>
      <Code hidden={!showCode} block my={0} width="100%">
        {code}
      </Code>
    </StyledPlaygroundContainer>
  );
};

CodeCollapse.defaultProps = {
  direction: "row",
  textAlignment: "center",
  code: "someCode",
  content: "someContent",
};
