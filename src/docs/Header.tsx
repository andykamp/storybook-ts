import React from "react";
import styled from "styled-components";

const StyledContainer = styled.h1`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  min-width: 650px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.imgSrc});
  border-radius: 6px;
  padding: 40px 24px;
`;
const StyledText = styled.span`
  width: 461px;
  z-index: 1;
  align-content: center;
`;

interface Props {
  text: string;
  imgSrc: string;
}

export const Header = ({ text, imgSrc }: Props) => {
  return (
    <StyledContainer imgSrc={imgSrc}>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  );
};

Header.defaultProps = {
  text: "Some Title",
  imgSrc: "src/assets/HeaderWelcome.png",
};
